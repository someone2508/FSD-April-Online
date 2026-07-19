let nums = [1, 2, 3, 4, 5];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// for (let val of nums) {
//   console.log(val);
// }

// for (let i in nums) {
//   console.log(nums[i]);
// }

// nums.forEach((val) => {
//   console.log(val);
// });

// nums.forEach((val) => {
//   console.log(val * val);
// });

// nums.forEach((val, idx) => {
//   console.log(idx + " : " + val);
// });

// 1) create a array of object -> [{}, {}, {}] -> {} -> {name: "", marks, .....}
// give me a new array of the name of all the students.

const students = [
  { name: "Pradeep", marks: 90 },
  { name: "kunal", marks: 89 },
  { name: "kamini", marks: 85 },
];

// let studentNames = [];

// students.forEach((std) => {
//   studentNames.push(std.name);
// });

// console.log(studentNames);

let totalMarks = 0;

students.forEach((std) => {
  totalMarks += std.marks;
});

console.log(totalMarks / students.length);
