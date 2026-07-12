// let emp1 = {
//   name: "ravi",
//   salary: 100000,
// };

// let emp2 = {
//   name: "riyaz",
//   salary: 120000,
//   dob: "01-01-2000",
// };

// let emp3 = {
//   name: "kamini",
//   salary: 120000,
//   hobbies: ["..."],
// };

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

let e1 = new Employee("John", 50000);
let e2 = new Employee("Kamini", 70000);
let e3 = new Employee("Mohammad", 80000);

console.log(e2.salary);
