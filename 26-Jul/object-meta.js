let student = {
  name: "Riyaz",
};

console.log(Object.getOwnPropertyDescriptor(student, "name"));

// student.name = "Abhishek";

// console.log(student);

// for (let key in student) console.log(key + " : " + student[key]);

// delete student.name;

// console.log(student);

Object.defineProperty(student, "name", {
  value: "Riyaz",
  writable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(student, "name"));

student.name = "Abhishek";

console.log(student);

delete student.name;

console.log(student);

student.name = "abhishek";

console.log(student);
