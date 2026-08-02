// function greet(callbackFunc) {
//   console.log("Hello!");

//   callbackFunc();
// }

// function whomToGreet() {
//   console.log("Student");
// }

// greet(whomToGreet);

// function calculate(a, b, operation) {
//   // some task

//   operation(a, b);

//   // some task
// }

// calculate(10, 20, (x, y) => {
//   console.log(x + y);
// });

// function evaluate(score, callback) {
//   callback(score);
// }

// evaluate(80, (score) => {
//   console.log(score >= 33 ? "Pass" : "Fail");
// });

// download a document,
// once the download is completed, after 3 seconds the document should open automatically.

// function download(openDocCallback) {
//   console.log("Downloading.....");

//   setTimeout(() => {
//     console.log("downloaded!");

//     setTimeout(() => {
//       console.log("opening the document!");

//       openDocCallback();
//     }, 3000);
//   }, 1000);
// }

// download(() => {
//   console.log("Document opened!");
// });

setTimeout(() => {
  console.log("Level 1 callback called!");
  setTimeout(() => {
    console.log("Level 2 callback called!");
    setTimeout(() => {
      console.log("Level 3 callback called!");
    }, 1000);
  }, 2000);
}, 3000);
