let nums = [1, 2, 3, 4, 5];

// filter: it simply allow you to filter out list of elements based on the given cond.
// it create a new array for your filtered answers.

let oddNums = nums.filter((eNum) => eNum % 2 != 0);

// console.log(oddNums);

// exp 2

let students = [
  {
    name: "kamini",
    birthYear: 2000,
    marks: 80,
  },
  {
    name: "riyaz",
    birthYear: 2001,
    marks: 60,
  },
  {
    name: "mohammad",
    birthYear: 2002,
    marks: 90,
  },
];

// const highMarksStudents = students.filter((eStud) => eStud.marks >= 70);

// console.log(highMarksStudents);

// const studentNames = highMarksStudents.map((eStud) => eStud.name);

// console.log(studentNames);

const studentN = students
  .filter((eStud) => eStud.marks >= 70)
  .map((eStud) => eStud.name);

// console.log(studentN);

let products = [
  {
    category: "electronics",
    name: "phone",
    price: 1000,
  },
  {
    category: "electronics",
    name: "charger",
    price: 500,
  },
  {
    category: "clothing",
    name: "tshirt",
    price: 200,
  },
];

const productNames = products
  .filter((eP) => eP.category == "electronics")
  .map((eP) => eP.name);

console.log(productNames);
