let arr = [10, 20, 30];

console.log("--------Normal Loop---------");

// normal for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("--------For Of Loop---------");

// for of loop
for (let value of arr) {
  console.log(value);
}

let arr1 = [20, 25, 30];

// for of loop

let sum = 0;

for (let val of arr1) {
  sum += val;
}

console.log(sum);

let arr2 = [1, 2, 3, 4, 5, 6];

// for of loop
// find and print all the event number.

console.log("Even Numbers");

for (let val of arr2) {
  if (val % 2 == 0) {
    console.log(val);
  }
}

let fruits = ["apple", "banana", "mango"];

// use for of all, and print all values in uppercase

for (let munib of fruits) {
  console.log(munib);
}

let arr3 = ["apple", "kiwi", "papaya"];

// count the number of values in this arr, which have the char "a" in it.

let count = 0;

for (let val of arr3) {
  if (val.includes("a")) {
    count++;
  }
}

console.log(count);
