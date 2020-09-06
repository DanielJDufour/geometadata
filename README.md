:warning: This is a work in progress

# geometadata
Parse Geographic MetaData (GMD) XML

# install
```bash
npm install geometadata
```

# usage
```javascript
const fs = require("fs");
const parse = require("geometadata/parse");

const text = fs.readFileSync("metadata.xml", "utf-8");
const results = parse(text);
/*
{
    language: 'Italian',
    projection: 4326,
    xmin: 10.2822923743907,
    xmax: 13.3486486092171,
    ymin: 44.418521542726054,
    ymax: 47.15260827566466
}    
*/
```