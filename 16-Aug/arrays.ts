// let arr: number[] = [1, 2, 3, 4, 5, "", true, []];

// let arr1: string[] = [1, ""];

let age2: number | string;

// let ageArr: number[] | string[] = [20, "22"];

let ageArr1: (number | string)[] = [20, "22"];

type User1 = {
  id: number;
  name: string;
  age: number;
  email: string;
};

let arr: User1[] = [
  {
    id: 1,
    name: "Rahul",
    age: 22,
    email: "Rahul@gmail.com",
  },
  {
    id: 2,
    name: "Mohammad",
    age: 22,
    email: "Rahul@gmail.com",
  },

  {
    id: 3,
    name: "ravi",
    age: 22,
    email: "ravi@gmail.com",
  },
];
