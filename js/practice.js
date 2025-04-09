const fs = require("node:fs")
const data = fs.readFileSync("input.txt", "utf8")
fs.writeFileSync("output.txt", data.toUpperCase())
