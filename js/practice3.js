const fs = require("node:fs")

const readStream = fs.createReadStream("input.txt")
const writeStream = fs.createWriteStream("output.txt")
readStream.pipe(writeStream)

// メモリ効率：ファイル全体をメモリに読み込まず、少しずつ処理するので大きなファイルでもメモリ不足になりにくい
// 速度：読み込みと書き込みが並行して行われるので効率的
// シンプル：複雑なコードを書かずに効率的なファイルコピーができる
