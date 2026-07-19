// exp 1

// let arr = [4, 3, 2, 1];

// // sort is an inbuild array function, which sorts the original array
// arr.sort();

// console.log(arr);

// exp 2

// let arr = [100, 2, 50, 9];

// arr.sort((a, b) => {
//   return a - b;
// });

// console.log(arr);

// exp 3

// let arr = [100, 2, 50, 9];

// arr.sort((a, b) => {
//   return b - a;
// });

// console.log(arr);

// exp 4

// let arr = ["Zara", "Ankit", "Rahul"];

// arr.sort();

// console.log(arr);

let arr = [
  { name: "Ram", marks: 99 },
  { name: "Shyam", marks: 95 },
  { name: "krishna", marks: 90 },
];

arr.sort((a, b) => {
  return a.marks - b.marks;
});

console.log(arr);
