# kiso-ebike-lp 更新（v2 修正反映版）

前回からの変更点:
  - ブランド名 → Beyond Nakasendo Cycling
  - E-bike レンタルのみ ¥4,000/人
  - ガイド料金表記を明確化（¥5,000/グループ + ¥5,000/人, ガイド同行・e-bike込み）
  - 荷物シャトルは「バイク利用者向け」条件付き
  - 料金欄の下にオープンキャンペーンバナー（撮影・FB協力で8割引）
  - ウェザーカバー削除
  - 雨天時の習字体験ゾーン新設（仮画像 shodo.jpg, 8割引）

## 上書きするファイル（このフォルダ → C:\Users\ravni\kiso-ebike-lp）
  src/app/page.tsx           ← 上書き
  src/app/layout.tsx         ← 上書き
  src/app/globals.css        ← 上書き
  src/app/reserve/page.tsx   ← 上書き（前回と同じ・差分なし）
  public/assets/*.jpg        ← gorge / ebike / tsumago / shodo(新規・仮画像)

shodo.jpg は習字体験用の仮プレースホルダー。
本番写真ができたら同名で差し替えれば自動反映。

## 手順
1. src と public をフォルダ構成保持で上書きコピー
2. ローカル確認:  npm run dev  → http://localhost:3000
3. push:
     git add .
     git commit -m "Update LP: Beyond Nakasendo Cycling, pricing, campaign, rainy-day plan"
     git push
   → kiso-ebike-lp.vercel.app に反映

## 残: Square 予約コード（#book のプレースホルダー）
当面は電話/メール導線が保険。発行コードが出たら Claude に渡せば組み込む。
