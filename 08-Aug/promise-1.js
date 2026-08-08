// console.log("Start!");

// setTimeout(() => {
//   console.log("Data Received!");
// }, 2000);

// console.log("End!");

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Received!");
    }, 2000);
  });
}

getData()
  .then((msg) => {
    // success
    console.log(msg);
    console.log("Success found in the then callback!");
  })
  .catch((msg) => {
    // failure
    console.log("Failure found in the catch callback!");
  });

console.log("End of the code!");
