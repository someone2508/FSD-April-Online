const os = require("node:os");

console.log("====== System Information =========");

console.log("Hostname : ", os.hostname());
console.log("Operating System : ", os.type());
console.log("Platform : ", os.platform());
console.log("OS Release : ", os.release());
console.log("Architecture : ", os.arch());
