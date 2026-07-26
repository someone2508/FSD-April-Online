let students = [
  {
    name: "kamini",
    birthYear: 2000,
    marks: 80,
  },
  {
    name: "riyaz",
    birthYear: 2001,
    marks: 30,
  },
  {
    name: "mohammad",
    birthYear: 2002,
    marks: 90,
  },
];

// const failedStudents = students.filter((eStud) => eStud.marks < 33);

// if (failedStudents.length > 0) console.log("Yes!");
// else console.log("No!");

// console.log(
//   students.filter((eStud) => eStud.marks < 33).length > 0 ? "Yes!" : "No!"
// );

let users = [
  {
    role: "user",
    name: "pratik",
  },
  {
    role: "admin",
    name: "mohammad",
  },
  {
    role: "user",
    name: "abhishek",
  },
];

// const isAdmin = users.some((eUser) => eUser.role == "admin");

// console.log(isAdmin);

const areAllUsers = users.every((eUser) => eUser.role == "user");

console.log(areAllUsers);
