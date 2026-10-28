# Let's split

傾斜配分・為替換算・レシート読み取り・振込先登録に対応した割り勘Webアプリ。ビルド不要の静的サイト(`index.html` 1枚)です。

- 傾斜: 倍率・割合(%)・金額指定で負担額を配分(端数も合計が一致)
- 為替: 外貨の支払いを精算通貨へ自動換算
- レシート: 端末内OCRで品目を読み取り、品目ごとに注文者を割り当て
- 振込先: 銀行口座・PayPayを登録し、精算画面からワンタップでコピー
- 多言語(13言語): 日本語 / English / 한국어 / 简体中文 / 繁體中文 / Français / Deutsch / Español / Português / Italiano / ไทย / Tiếng Việt / Bahasa Indonesia(設定で切替)。言語の追加は `lang/` に番号つきの翻訳ファイル(`lang/keys.js` の番号に対応)を足し、`LANGS` に1行足すだけです
- 共有: QRコード/リンクでメンバーにイベントを共有(アプリ内でQR読み取りも可)。銀行・決済サービス(PayPay、Wise、PayPal、Alipay、GCash、UPI、PIX など)を複数登録でき、精算画面などから参照できます
- マイ口座: 一度登録した口座を、ほかのイベントでも使い回せます
- データは利用者のブラウザ内(localStorage)にのみ保存されます

## ローカルで動かす

```bash
python3 -m http.server 5173
```

## 公開 (GitHub Pages)

Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)`
