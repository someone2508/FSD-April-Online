let student = {
  id: 101,
  name: "mohammad",
  age: 21,
  course: "MERN",
  marks: 87,
};

student["email"] = "mohammad@gmail.com";

delete student.age;

// for in: it allows you to iterate over each key of the object

// for (let key in student) {
//   console.log(key + " : " + student[key]);
// }

// exp 2

// let cnt = 0;

// for (let key in student) {
//   let value = student[key];

//   if (typeof value === "number") cnt++;
// }

// console.log(cnt);

// exp 3

console.log("email" in student);

let nums = [10, 20, 30];

console.log(3 in nums);
