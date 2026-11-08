import { Play } from "lucide-react";
import { HOW_IT_WORKS_SHORT_ID } from "../site";

/**
 * Vertical (9:16) YouTube Shorts embed for the how-it-works page.
 * The video ID lives in one place: HOW_IT_WORKS_SHORT_ID in site.ts.
 * While it is empty, a play-button placeholder ("video coming soon") is shown.
 */
export function ShortVideo({ title, soon }: { title: string; soon: string }) {
  const id = HOW_IT_WORKS_SHORT_ID.trim();
  return (
    <div className="hiw-short">
      {id ? (
        <iframe
          src={`https://www.youtube.com/embed/${encodeURIComponent(id)}?rel=0&modestbranding=1&playsinline=1`}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div className="hiw-short-empty" role="img" aria-label={soon}>
          <span className="hiw-play">
            <Play size={30} fill="currentColor" />
          </span>
          <span>{soon}</span>
          <small>9:16 · YouTube Shorts</small>
        </div>
      )}
    </div>
  );
}
