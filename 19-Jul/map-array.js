// let arr = [1, 2, 3, 4, 5];

// // newArr = [2, 3, 4, 5, 6]

// const newArr = arr.map((val) => {
//   return val + 1;
// });

// console.log(newArr);

let employees = [
  { name: "ravi", salary: 80000 },
  { name: "abhishek", salary: 75000 },
  { name: "mohammad", salary: 85000 },
];

const updatedEmps = employees.map((emp) => {
  return {
    name: emp.name,
    salary: emp.salary * 1.1,
  };
});

console.log(updatedEmps);

console.log(employees);
