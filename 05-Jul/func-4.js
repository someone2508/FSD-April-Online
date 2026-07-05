// function add1(a, b) {
//   console.log(a + b);
// }

// // function() {

// // }

// // annonymous arrow function
// () => {};

// // arrow function
// const func = () => {};

// // arrow function
// const add2 = (a, b) => {
//   console.log(a + b);
// };

// function staticFunc() {
//   console.log(10 + 20);
// }

// add1(10, 20);
// add2(20, 30);

// // arrow function: not hoisted, you can not call it before declaration
// const square1 = (num) => {
//   console.log(num * num);
// };

// // function declaration: are hoisted
// function square2(num) {
//   console.log(num * num);
// }

// // function expression: not hoisted, you can not call it before declaration
// const square3 = function (num) {
//   console.log(num * num);
// };

// function add(num1, num2) {
//   return num1 + num2;
// }

// let result = add(10, 20);

// console.log("Output : ", result);

// function greet() {
//   return "Hello from the greet function";
// }

// let msg = greet();

// console.log(msg);

// function greet1() {
//   console.log("Hello!");
// }

// create a function to calculateDiscount -> price, discount%
// should return, after discount price

// function calculateDiscount(price, discount) {
//   let dis = (price * discount) / 100;

//   return price - dis;
// }

// let finalPrice = calculateDiscount(100, 10);

// console.log(finalPrice);

// calculateSalary
// basic + hra + al (additional allowances)

// calculateSalary(basic) -> final salary
// hra -> 20% of your basic
// al -> 15% of your basic

function calculateDiscount(basic) {
  let hra = basic * 0.2;
  let al = basic * 0.15;

  return basic + hra + al;
}

let finalSal = calculateDiscount(100000);

console.log("finalSal : ", finalSal);

// calculateCartValue
// price, quantity, tax%, discount%

let calculateCartValue = (price, quantity, taxPerc, disPerc) => {
  let totalPrice = price * quantity; // 200

  let taxAmount = totalPrice * (taxPerc / 100); // 20

  let totalAmountIncTax = totalPrice + taxAmount; // 220

  let discountAmount = totalAmountIncTax * (disPerc / 100); // 11

  return totalAmountIncTax - discountAmount; // 220 - 11 = 209
};

let finalPrice = calculateCartValue(100, 2, 10, 5);

console.log(finalPrice);
