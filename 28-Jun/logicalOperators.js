console.log(true && true); // true

console.log(true && false); // false

console.log(false && false); // false

let age = 22;

// between 18 to 60

console.log(age >= 18 && age <= 60); // true

console.log("OR Operator");

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false

let isWeekend = true;
let isHoliday = false;

console.log(isWeekend || isHoliday); // no office today!

let marks = 34;

// >= 40 marks || grace marks = 35

console.log(marks >= 40 || marks == 35);

console.log("Not operator ! ");
// not (!)

console.log(!true);

let price = 100;

console.log(!(price > 90));
