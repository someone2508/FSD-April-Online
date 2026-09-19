// spread

// let arr = [1, 2, 3, 4];

// // spreading the values of my array
// let newArr = [...arr];

// function add(...params) {
//   let ans = 0;

//   params.forEach((e) => (ans += e));

//   console.log(ans);
// }

// add(1);
// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4);

// function add(num1, num2, ...nums) {
//   console.log("Num1 : " + num1);
//   console.log("Num2 : " + num2);

//   console.log(nums);
// }

// add();

let obj = {
  name: "kamini",
  gender: "female",
  age: 20,
};

let newObj = {
  ...obj,
  age: 21,
};

console.log(newObj);
