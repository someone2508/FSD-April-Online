function greet() {
  console.log("Good morning!");
}

// greet();

// function welcomeStudent(raushan) {
//   console.log("Welcome ", raushan);
// }

// welcomeStudent("Manish");
// welcomeStudent("Abhishek");
// welcomeStudent("Raushan");

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(10, 20);

// add(10.2, 5.7);

// function area(length, width) {
//   console.log("Area is ", length * width);
// }

// area(10, 5);
// area(15, 7);

let gstPercentage = 0.18;

function calculateGST(price) {
  let gst = price * gstPercentage;

  console.log("GST is ", gst);
}

calculateGST(1000);
