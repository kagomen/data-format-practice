## 初級: 基本的なファイル操作

```js
// ファイルの読み書き
const fs = require("fs")
const data = fs.readFileSync("input.txt", "utf8")
fs.writeFileSync("output.txt", data.toUpperCase())
```

## 中級: 非同期ファイル操作

```js
// 非同期でファイルを読み書き
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err
  fs.writeFile("output.txt", data.toUpperCase(), (err) => {
    if (err) throw err
    console.log("ファイルが保存されました")
  })
})
```

## 上級: ストリーム操作

```js
// ストリームを使ったファイルのコピー
const readStream = fs.createReadStream("input.txt")
const writeStream = fs.createWriteStream("output.txt")
readStream.pipe(writeStream)
```

## 実務で役立つスキルセットの組み合わせ

基本操作: ファイルの読み書き、ディレクトリ操作
データ形式: JSON、CSV、XML 処理
エラーハンドリング: ファイル処理中のエラー対応
ストリーム処理: 大きなファイルの効率的な処理
非同期処理: Promise や async/await を使った操作

## まとめ: どの学習方法が最適か

あなたの学習スタイルによって最適なアプローチは異なります：

体系的に学びたい方: Node.js の教科書やコースから学ぶ
実践派: 小さなプロジェクトを作りながら必要な知識を身につける
参照重視: 公式ドキュメントをブックマークして必要に応じて参照する
