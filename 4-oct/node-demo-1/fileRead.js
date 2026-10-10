const fs = require("fs");

console.log("Starting to read the file!");

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error occured");
    console.log(err);

    return;
  }

  console.log(data);
});

console.log("File read successfully!");
