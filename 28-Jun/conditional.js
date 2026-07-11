// let age = 10;

// // if condition
// // if else

// if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not Eligible");
// }

// let marks = 10;

// // 95 - 100 -> A+
// // 80 - 94 -> A
// // 75 - 79 -> B+
// // 60 - 74 -> B
// // 50 - 59 -> C+
// // 35 - 49 -> C
// // 0 - 34 -> D

// // if - else if - else

// if (marks >= 95 && marks <= 100) {
//   console.log("A+");
// } else if (marks >= 80 && marks <= 94) {
//   console.log("A");
// } else if (marks >= 75 && marks <= 79) {
//   console.log("B+");
// } else if (marks >= 60 && marks <= 74) {
//   console.log("B");
// } else if (marks >= 50 && marks <= 59) {
//   console.log("C+");
// } else if (marks >= 35 && marks <= 49) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// movie ticket system

// let bp = 100;
// let ticketType = "gold";

// if (ticketType == "normal") {
//   console.log(bp * 1.18);
// } else if (ticketType == "silver") {
//   console.log(bp * 1.3 * 1.18);
// } else if (ticketType == "gold") {
//   console.log(bp * 1.5 * 1.18);
// } else if (ticketType == "platinium") {
//   console.log(bp * 1.8 * 1.18);
// } else {
//   console.log("wrong ticket type!");
// }

let numberOfUnits = 210;
let perUnitPrice = 10;

if (numberOfUnits <= 100) {
  console.log(perUnitPrice * numberOfUnits * 1.18);
} else if (numberOfUnits <= 200) {
  console.log(perUnitPrice * 1.1 * numberOfUnits * 1.18);
} else {
  console.log(perUnitPrice * 1.2 * numberOfUnits * 1.18);
}

// Number() -> 1, 1.1, 99.999999

// Math.trunc()
