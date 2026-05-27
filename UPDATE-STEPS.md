# kiso-ebike-lp 更新（v3.1 Square予約URL修正版）

修正内容:
  予約URL を正しいものに修正（...n5ipgn3swmf0ps/... ※"ps"が正）
  ※前回 v3 は "qs" になっていて予約画面が開けなかった。今回修正済み。

正しいSquare予約URL:
  https://app.squareup.com/appointments/book/n5ipgn3swmf0ps/LKFD21FHJ8GJJ/start

## 上書きするファイル
  src/app/page.tsx   ← これだけ上書き

## 手順
1. このフォルダの src/app/page.tsx を
   C:\Users\ravni\kiso-ebike-lp\src\app\page.tsx に上書き
2. ローカル確認: npm run dev → http://localhost:3000
   予約ボタンを押して Square 予約画面（サービス選択）が開けばOK
3. push:
     git add .
     git commit -m "Fix Square booking URL typo (qs -> ps)"
     git push

本番ビルド成功・型チェック通過・警告ゼロ確認済み。
