// let arr = [1, 2, 3, 4, 5];

// // currVal -> it is the val from the arr
// // prevVal
// // 1st iteration: it is the default/initial value
// // next iteration: prevVal = the value you return from the callback.
// const sum = arr.reduce((prevVal, currVal) => {
//   console.log("Sum until now " + prevVal);
//   console.log("What is the curr value to be added : " + currVal);

//   console.log("Sum after adding current value : " + (currVal + prevVal));

//   console.log("==================================");
//   return currVal + prevVal;
// }, 0);

// console.log("Final sum : " + sum);

let prices = [50, 70, 20, 90, 100];

const fAns = prices.reduce((prevVal, currVal) => {
  console.log(prevVal + " : " + currVal);
  return Math.min(prevVal, currVal);
});

console.log("Final ans : " + fAns);
