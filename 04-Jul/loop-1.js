// for loop

// for (init; condition; change) {
//   // your logic stays here
// }

// for (var i = 1; i <= 10000; i++) {
//   console.log(i, " : Hello!");
// }

// all the even numbers from 1 - 20

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// console.log("End of the loop!");

// print all the odd numbers from 1 - 20

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// print all the numbers from 1 - 10, but in reverse

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// multiples of 7

// for (let i = 1; i <= 10; i++) {
//   console.log(i * 7);
// }

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   sum += i;
//   console.log(sum);
// }

let n = 0,
  ans = 1;

for (let i = 1; i <= n; i++) {
  ans *= i;
}

console.log("factorial of n is ", ans);
