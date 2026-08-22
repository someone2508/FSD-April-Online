let username: string = "Pratik";

// username = 20;

let age: number = 20;

// age = "twenty";

let isLoggedIn: boolean = true;

// isLoggedIn = 1;

let arr = [10, 20, "thirty", true];

let marks: number[] = [80, 90];

let skills: string[] = ["Js", "TS", "Node"];

skills.push("React");

// let student = {
//   name: "Rahul",
//   age: 22,
//   isActive: true,
// };

type Student = {
  name: string;
  age: number;
  isActive: boolean;
};

let student1: Student = {
  name: "Rahul",
  age: 22,
  isActive: true,
};

let student2: Student = {
  name: "Mohd",
  age: 21,
  isActive: true,
};

// let userId1 = "U101";

// let userId2 = 1001;

let userId1: number | string = 101;

let userId2: number | string = "U101";

let isActive: number | string | boolean = false;

let ages: (number | string)[] = [22, "twenty"];

function addition(val1, val2) {
  console.log(val1 + val2);
}

addition("20", 10);

function substraction(val1, val2) {
  console.log(val1 - val2);
}

substraction("20", 10);

function mul(val1, val2) {
  console.log(val1 * val2);
}

mul("20", 10);

function div(val1, val2) {
  console.log(val1 / val2);
}

div("20a", 10);

type UserId = string;

let userId3: number = 10;

let userId4: string = 10;
