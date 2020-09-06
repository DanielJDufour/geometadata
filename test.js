const fs = require("fs");
const test = require("ava");
const parse = require("./parse");

const text = fs.readFileSync("./data/test.xml", "utf-8");

test("getting data from xml file", (t) => {
  const results = parse(text);
  t.deepEqual(results, {
    language: "Italian",
    projection: 4326,
    xmin: 10.2822923743907,
    xmax: 13.3486486092171,
    ymin: 44.418521542726054,
    ymax: 47.15260827566466,
  });
});
