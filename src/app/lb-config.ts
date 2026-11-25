/** ============================================================
 *  ラゲッジバスの表示の設定。
 *  補償額は 2026-11-24 社長決定(旅行業の約款どおり):荷物1個あたり最大10万円、お一人あたり最大15万円。
 *  保険は社長決定で「いったん伏せる」= 画面に一切出さない(LB_INSURANCE は常に null)。
 *  ============================================================ */

const str = (v: string | undefined) => (v ?? "").trim();

/** 当社が荷物1個あたりいくらまで補償するか(円)。 */
export const LB_COMPENSATION_YEN = 100000;
/** 当社がお一人あたりいくらまで補償するか(円)。 */
export const LB_COMPENSATION_PERSON_YEN = 150000;

/** 保険の表示は伏せる(2026-11-24 社長)。出すときはここを書き換える。 */
export const LB_INSURANCE: { en: string; ja: string } | null = null;

/** 取り決めがまだの案内の表示: "off"=出さない(既定) / "soon"=Coming soon だけ / "on"=案内を出す。 */
export type LbFeature = "off" | "soon" | "on";
const feature = (v: string | undefined): LbFeature => {
  const s = str(v).toLowerCase();
  return s === "on" || s === "soon" ? s : "off";
};

/** 中津川駅前「にぎわい特産館」(中津川観光案内所)での預け。2026-11-25 社長が中津川観光協会と打ち合わせ済み、
 *  宿・駅一覧スプシで集配対象=y。既定で選択肢に出す(環境変数に "off"/"soon" を入れたときだけ隠す)。 */
const nkRaw = str(process.env.NEXT_PUBLIC_LB_NAKATSUGAWA_DROP);
export const LB_NAKATSUGAWA_DROP: LbFeature = nkRaw ? feature(nkRaw) : "on";

/** 遠方からヤマトで送って、ラゲッジバスが引き継ぐ中継の案内(取り決め未確認)。 */
export const LB_YAMATO_RELAY: LbFeature = feature(process.env.NEXT_PUBLIC_LB_YAMATO_RELAY);
