// // function declaration
// function greet1() {
//   console.log("Hello from function declaration!");
// }

// // annonymous function: the function that does not have any name.

// // function expression: assigning a annonymous function to a variable
// const greet2 = function () {
//   console.log("Hello from function expression!");
// };

// greet1();
// greet2();

// const add = function (num1, num2) {
//   console.log(num1 + num2);
// };

// add(10, 20);

greet1();

function greet1() {
  console.log("Hello from function declaration! ----- HOISTED!");
}

// i can not call function expression, because it is not completely hoisted!
console.log(greet2);

var greet2 = function () {
  console.log("Hello from function expression!");
};
