// // global variables
// let studentName = "Kamini";

// function show() {
//   // functional scope: this variable can only be accessed inside the function locally
//   let sId = 1234;
//   console.log(studentName, " : ", sId);
// }

// console.log(sId);

// if (true) {
//   console.log(studentName);
// }

// console.log(studentName);

// show();

// global scope: can be accessed by anyone in this code file
// let city = "Delhi"; // Mumbai

// function print() {
//   console.log(city);
// }

// function change() {
//   city = "Mumbai";
// }

// print(); // Delhi
// change();
// print(); // Mumbai

// function printCity() {
//   // local variable: it is local to this function
//   let city = "Delhi";
//   console.log(city);
// }

// printCity();

// console.log(city);

// let a = 10; // global variable: any one in this code can read/update this variable

// function print() {
//   let b = 20; // locally / functional scoped variable: this can only be accessed inside this function

//   console.log(a + " " + b);
// }

// print();

// console.log(a + " " + b);

// new exp

// let count = 10; // 10 -> 11

// function increase() {
//   ++count;
//   console.log("line 61 : ", count); // print 2 -> 11
// }

// console.log("line 64 : ", count); // print 1 -> 10

// increase(); //

// console.log("line 68 : ", count); // print 3 -> 11

// new exp

let score = 90; // global
let score1 = 99;

function print() {
  let score = 95; // local

  console.log(score1); // 95
}

print();

console.log(score); // 90
