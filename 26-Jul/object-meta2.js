let student = {
  name: "Riyaz",
};

// student.password = "riyaz@123";     // r*****3

Object.defineProperty(student, "password", {
  value: "riyaz@123",
  enumerable: false,
});

for (let key in student) {
  console.log(key + " : " + student[key]);
}

console.log(student["password"]);
