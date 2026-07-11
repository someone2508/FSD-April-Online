// let student1 = {
//   name: "rahul",
//   age: 24,
//   city: "Delhi",
// };

// console.log(student1.name);

// console.log(student1["age"]);

// console.log(student1.name1);

// console.log(student1["age1"]);

// console.log(student1);

let student1 = {
  name: "rahul",
  age: 24,
  city: "Delhi",
};

for (let key in student1) {
  console.log(key + " : " + student1[key]);
}

let key = "name";

console.log(student1[key]);

console.log(student1.key);
