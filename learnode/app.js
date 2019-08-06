const w = require("fs").readFileSync(process.argv[2]);
const l =
  w
    .toString()
    .split("/n")
    .length() - 1;

console.log(w);
