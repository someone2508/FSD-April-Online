let nums = [1, 2, 3, 4];

// map: which allows us to do something, some operation on every single element of the array
// does not change the original array, it does operation on each element and creates a new array

const rs = nums.map((elem) => {
  // [5, 10, 15, 20]
  return elem * 5;
});

// console.log(rs);

// exp 2

let fruits = ["mango", "banana", "kiwi"];

const capFruits = fruits.map((fruit) => {
  // ["MANGO", "BANANA", "KIWI"]
  return fruit.toUpperCase();
});

// console.log(capFruits);

// exp 3

let students = [
  {
    name: "kamini",
    birthYear: 2000,
  },
  {
    name: "riyaz",
    birthYear: 2001,
  },
  {
    name: "mohammad",
    birthYear: 2002,
  },
];

const studentNames = students.map((eachS) => eachS.name);

// console.log(studentNames.sort());

// exp 4

// const studentAges = students.map((eachS) => {
//   return new Date().getFullYear() - eachS.birthYear;
// });

const studentAges = students.map(
  (eachS) => new Date().getFullYear() - eachS.birthYear
);

console.log(studentAges);
