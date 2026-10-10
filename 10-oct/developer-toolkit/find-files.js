const fs = require("node:fs");
const path = require("node:path");

const directory = "reports";

const files = fs.readdirSync(directory);

const csvFiles = files.filter(
  (file) => path.extname(file).toLowerCase() === ".csv"
);

console.log("CSV files : ", csvFiles);
