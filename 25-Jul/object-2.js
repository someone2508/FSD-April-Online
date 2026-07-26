// let student = {
//   id: 101,
//   name: "mohammad",
//   age: 21,
//   course: "MERN",
//   marks: 87,
// };

// let keyName = "age";

// console.log(student[keyName]);

let keyName = "age";

let student = {
  id: 101,
  name: "mohammad",
  [keyName]: 21,
  course: "MERN",
  marks: 87,
};

console.log(student);
