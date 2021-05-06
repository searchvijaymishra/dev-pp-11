//fs=> file system

const fs = require("fs");
// console.log(fs);
// utf-8 format of plain text
let f1kadata = fs.readFileSync("./f1.txt","utf-8");
console.log(f1kadata);


fs.writeFileSync("./index.txt","hey i m index");