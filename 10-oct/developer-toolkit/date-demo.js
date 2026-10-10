const dayjs = require("dayjs");

const now = dayjs();

console.log(now.toISOString());

console.log(now.format("DD MM YYYY, hh:mm"));

console.log(now.add(1, "day").format("YYYY-MM-DD"));
