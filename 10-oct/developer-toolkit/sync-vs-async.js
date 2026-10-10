const fs = require("node:fs");

console.log("1) Start.");

const content1 = fs.readFileSync("logs/app.log", "utf8");

console.log(content1);

console.log("2) Sync read complete, now staring async read!");

fs.readFile("logs/app.log", "utf8", (err, data) => {
  if (err) {
    console.log("Error occured while reading the file async");
    console.log(err);
    return;
  }

  console.log(data);
  console.log("File is read async, succefully!");
});

console.log("3) program completed!");
