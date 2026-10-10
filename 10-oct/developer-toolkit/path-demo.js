const path = require("node:path");

// users/snm/desktop/project/chatApp/index.js

const filePath = path.join(
  "users",
  "snm",
  "desktop",
  "projects",
  "chatApp",
  "index.js"
);

console.log(filePath);
console.log("Absolute path : ", path.resolve(filePath));
