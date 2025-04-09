const fs = require("node:fs")

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err
  fs.writeFile("output.txt", data.toUpperCase(), (err) => {
    if (err) throw err
    console.log("success!")
  })
})
