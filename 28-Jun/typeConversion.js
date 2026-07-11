// + -> if any one of the lhs or rhs is a string,
// it automatically tries to convert the other side as string.

console.log("10" + 5);

// - -> it tries to convert both the lhs and rhs into numbers
console.log("10" - 5);

// * -> it tries to convert both the lhs and rhs into numbers
console.log("10" * 5);

// true -> 1
// false -> 0
console.log(true + 1);
console.log(false + 1);

let age = "25";

// explicit type conversion
console.log(typeof Number(age));

let num = 10;

console.log(typeof String(num));

console.log(Number(true));

console.log(Number(false));

console.log(Boolean(1)); // true

console.log(Boolean(0)); // false

let numb = "5";

console.log(typeof Number(numb));

console.log(typeof +numb);

console.log(typeof numb);
