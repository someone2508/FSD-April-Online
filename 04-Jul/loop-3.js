let count = 10;

// while (count <= 5) {
//   // entry controllered logic
//   console.log(count);
// }

// console.log("End of while loop!");

// do {
//   console.log(count);
// } while (count <= 5); // exit controlled

// console.log("End of while loop!");

// for (let i = 1; i <= 100; i++) {
//   console.log(i);

//   // if i is divisible by 10
//   if (i % 10 == 0) {
//     break;
//   }
// }

// console.log("Out of the for loop!");

let i = 1;

while (i <= 100) {
  console.log(i);

  if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
    console.log("Now breaking!");
    break;
  }

  i++;
}

console.log("Out of the loop!");
