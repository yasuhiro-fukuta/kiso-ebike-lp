import Anthropic from "@anthropic-ai/sdk";
import { buildKappaPrompt, getGuestMaterial, getStaffMaterial } from "@/lib/kappa";

export const runtime = "nodejs";
export const maxDuration = 60;

const MODEL = process.env.CHAT_MODEL ?? "claude-haiku-4-5";
const MAX_MESSAGE_CHARS = 2000;
const MAX_TURNS = 30;
const WA = "https://wa.me/819038392354";

// Naive per-IP rate limit (resets per serverless instance) — a cost brake.
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 10;
const hits = new Map<string, number[]>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}

type ChatMessage = { role: "user" | "assistant"; content: string };

function isValidHistory(value: unknown): value is ChatMessage[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.length <= MAX_TURNS &&
    value.every(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0 &&
        m.content.length <= MAX_MESSAGE_CHARS,
    ) &&
    value[value.length - 1].role === "user"
  );
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response("Chat is not configured yet.", { status: 503 });
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return new Response("Too many requests. Please wait a moment.", { status: 429 });
  }

  let body: { messages?: unknown; k?: unknown };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid request.", { status: 400 });
  }
  if (!isValidHistory(body.messages)) {
    return new Response("Invalid request.", { status: 400 });
  }
  const history = body.messages;

  // 権限は合言葉（スタッフ専用リンクのキー）だけで決める。文中の言葉は見ない。
  const key = typeof body.k === "string" ? body.k.trim() : "";
  let staff = false;
  let material;
  if (key) {
    const m = await getStaffMaterial(key);
    if (!m.ok) return new Response("このリンクは使えません。管理者に新しいリンクをもらってください。", { status: 403 });
    staff = true;
    material = m;
  } else {
    material = await getGuestMaterial();
  }

  const client = new Anthropic();
  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 1024,
    system: [{ type: "text", text: buildKappaPrompt(material, staff), cache_control: { type: "ephemeral" } }],
    messages: history.map((m) => ({ role: m.role, content: m.content })),
  });

  const encoder = new TextEncoder();
  const out = new ReadableStream<Uint8Array>({
    start(controller) {
      stream.on("text", (delta) => controller.enqueue(encoder.encode(delta)));
      stream
        .finalMessage()
        .catch((err) => {
          console.error("kappa: stream error:", err);
          controller.enqueue(encoder.encode(`\n\nSorry, something went wrong. Please try again, or contact us on WhatsApp: ${WA}`));
        })
        .finally(() => controller.close());
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(out, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Kappa-Level": staff ? "staff" : material ? "guest" : "guest-nomaterial",
    },
  });
}
