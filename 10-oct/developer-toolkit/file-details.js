const path = require("path");

const filePath = "/app/upload/invoice.pdf";

console.log("Full Path : ", filePath);

console.log("FileName : ", path.basename(filePath)); // invoice.pdf

console.log("Extension : ", path.extname(filePath)); // .pdf

console.log("Directory : ", path.dirname(filePath)); // /app/upload
