// syncronous fs functions

const fs = require("node:fs");

const log = fs.readFileSync("logs/app.log", "utf8");

let lines = log.split("\n");

const errors = lines.filter((line) => line.includes("ERROR"));

console.log("Total line : ", lines.length);
console.log("Error lines : ", errors.length);
