const students = [
  {
    id: 1,
    name: "Rahul",
    age: 21,
    course: "MERN",
    address: {
      city: "Bangalore",
      state: "Karnataka",
    },
  },
  {
    id: 2,
    name: "Ankit",
    age: 22,
    course: "Java",
  },
];

// tast 1

console.log("Task 1");

for (let key in students[0]) {
  console.log("key : " + students[0][key]);
}

console.log("Task 2");

for (let idx in students) {
  let student = students[idx];

  if ("address" in student) {
    console.log(idx + 1, " student object has the address");
  } else {
    console.log(idx + 1, " student does not have the address");
  }
}

console.log("Task 3");

console.log(students[0].address?.city);
console.log(students[1].address?.city);

console.log("Task 4");

let propertyName = "batch";

students[0][propertyName] = "Morning";
students[1][propertyName] = "Evening";

console.log(students);

console.log("Task 5");

Object.defineProperty(students[0], "id", {
  writable: false,
});

students[0].id = 100;

console.log(students);

console.log("Task 6");

Object.defineProperty(students[0], "password", {
  value: "something123",
  enumerable: false,
});

console.log(students[0]); // -> vcvwgddgwdgwu232njj
console.log(students[0].password);
