const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join("logs", "errorLogs.log");

fs.writeFileSync(filePath, "INFO: User LogedIn\n");

fs.appendFileSync(filePath, "ERROR : Add to cart failed\n");

fs.appendFileSync(filePath, "SUCCESS: Add to cart successfull\n");

fs.appendFileSync(filePath, "INFO: Order placed!");

fs.copyFile(filePath, "reports/app-backup.log", (err) => {
  if (err) {
    console.log("Copy failed", err.message);
    return;
  }

  console.log("Backup created successfully!");
});
