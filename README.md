# Let's split

傾斜配分・為替換算・レシート読み取り・振込先登録に対応した割り勘Webアプリ。ビルド不要の静的サイト(`index.html` 1枚)です。

- 傾斜: 倍率の比で負担額を配分(端数も合計が一致)
- 為替: 外貨の支払いを精算通貨へ自動換算
- レシート: 端末内OCRで品目を読み取り、品目ごとに注文者を割り当て
- 振込先: 銀行口座・PayPayを登録し、精算画面からワンタップでコピー
- 多言語: 日本語 / English / 한국어 / 简体中文(設定で切替。`lang/` に辞書を追加すれば言語を増やせます)
- データは利用者のブラウザ内(localStorage)にのみ保存されます

## ローカルで動かす

```bash
python3 -m http.server 5173
```

## 公開 (GitHub Pages)

Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)`
