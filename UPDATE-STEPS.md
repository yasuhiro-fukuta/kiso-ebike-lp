# kiso-ebike-lp 更新（v6 文言ブラッシュアップ）

変更:
  - ヒーロー: "Skip the guidebook" → "Slide out of the guidebook"
  - tours-head: "Every ride is a half day, 10:00–16:00" を共通表記に
  - Tsumagoカード: "Tsumago, Revisited" / 林業鉄道→妻籠の解説に書き換え
  - Gorgeカード: "Natural AC & Onsen" / 与川道避け→対岸ルートに書き換え
  - Challengersカード: "Nakasendo Challenge" / Yogawa trailの解説に書き換え
  - 各カードの "Half day · 10:00–16:00" 表記を削除（上に統一）
  - ルートマップの4ルートリスト＋未使用import (MapPin, ROUTE_LINKS) を削除
  - Gear/Includesに4つ目 "Waterproof Gear"（ラッシュガード/ライフジャケット/熊鈴・無料貸出）追加
  - FAQ "Where do we start?" → "Where do we start & end?" / 3地点選択可に
  - shodo.jpg を新しい画像（行灯）に差し替え

## 上書き
  src/app/page.tsx
  public/assets/shodo.jpg

## 手順
  ZIP解凍 → src と public を上書き → git add . && git commit -m "Refine copy and visuals" && git push

本番ビルド成功・警告ゼロ確認済み。
