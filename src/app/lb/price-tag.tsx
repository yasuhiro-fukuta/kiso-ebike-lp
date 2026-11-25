import { yen, CAMPAIGN_LABEL } from "../luggage-bus";

/** Price with the opening campaign (2026-11-25 社長決定): the regular price
 *  struck through, then the campaign price the guest pays (charged on Stripe).
 *  When the campaign price equals the regular price, only one price is shown. */
export function PriceTag({ total, list, lang }: { total: number; list: number; lang: "en" | "ja" }) {
  const discounted = list > total;
  return (
    <span className="lb-price-tag">
      {discounted && (
        <s className="lb-price-was" aria-label={lang === "ja" ? `定価 ${yen(list)}` : `Regular price ${yen(list)}`}>
          {yen(list)}
        </s>
      )}
      <strong className="lb-price-now">{yen(total)}</strong>
      {discounted && <span className="lb-campaign">{CAMPAIGN_LABEL[lang]}</span>}
    </span>
  );
}
