/** ============================================================
 *  ラゲッジバスの「社長が決めるまで出さない」表示の設定。
 *  値はVercelの環境変数で入れる(コードに金額・保険名を書かない)。
 *  空のあいだ、その行・その枠は画面に出ない。
 *  NEXT_PUBLIC_ なのでブラウザとサーバー(決済API)の両方で同じ値になる。
 *  ============================================================ */

const str = (v: string | undefined) => (v ?? "").trim();

/** 当社が1個あたりいくらまで補償するか(円)。未決定のあいだは空 → 補償の行を出さない。
 *  例: NEXT_PUBLIC_LB_COMPENSATION_YEN=30000 */
const compRaw = str(process.env.NEXT_PUBLIC_LB_COMPENSATION_YEN);
const compNum = Number(compRaw);
export const LB_COMPENSATION_YEN: number | null =
  compRaw && Number.isInteger(compNum) && compNum > 0 ? compNum : null;

/** 加入している保険の名前。未加入・未決定のあいだは空 → 保険の行を出さない。
 *  例: NEXT_PUBLIC_LB_INSURANCE_EN="Cargo insurance (XX Insurance)" / NEXT_PUBLIC_LB_INSURANCE_JA="XX保険の貨物保険" */
export const LB_INSURANCE: { en: string; ja: string } | null = (() => {
  const en = str(process.env.NEXT_PUBLIC_LB_INSURANCE_EN);
  const ja = str(process.env.NEXT_PUBLIC_LB_INSURANCE_JA);
  return en && ja ? { en, ja } : null;
})();

/** 取り決めがまだの案内の表示: "off"=出さない(既定) / "soon"=Coming soon だけ / "on"=案内を出す。 */
export type LbFeature = "off" | "soon" | "on";
const feature = (v: string | undefined): LbFeature => {
  const s = str(v).toLowerCase();
  return s === "on" || s === "soon" ? s : "off";
};

/** 中津川駅前「にぎわい特産館」での預け(取り決め未確認)。"on" のときだけ預け場所の選択肢に出る。 */
export const LB_NAKATSUGAWA_DROP: LbFeature = feature(process.env.NEXT_PUBLIC_LB_NAKATSUGAWA_DROP);

/** 遠方からヤマトで送って、ラゲッジバスが引き継ぐ中継の案内(取り決め未確認)。 */
export const LB_YAMATO_RELAY: LbFeature = feature(process.env.NEXT_PUBLIC_LB_YAMATO_RELAY);
