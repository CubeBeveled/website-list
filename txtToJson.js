const fs = require("fs");
const urls = fs.readFileSync("list.txt", "utf-8");
let urlArray = [];

urls.split("\n").forEach(url => {
  urlArray.push({ url: url });
});

fs.writeFileSync("list.json", JSON.stringify(urlArray, null, 2), "utf8");
