const fs = require("fs");

fetch("https://raw.githubusercontent.com/CubeBeveled/website-list/main/list.txt",
  {
    "method": "GET",
  }
)
  .then(async response => {
    let urlArray = [];

    const urls = await response.text();

    urls.split("\n")
      .forEach(url => {
        urlArray.push({ url: url });
      });

    fs.writeFileSync("URL list.json", JSON.stringify(urlArray, null, 2), "utf8");
  });
