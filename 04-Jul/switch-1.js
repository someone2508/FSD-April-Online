// basic calculator

// operations = +, -, *, /

// let num1 = 20,
//   num2 = 5;
// let op = "-";

// switch (op) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Invalid Operator");
// }

// day = Monday - Sunday

// condition 1: have to use switch
// condition 2: you can not right more then 2 logics, 1 case , 1 default

// let day = "Saturday";

// switch (day) {
//   case "Saturday":
//   case "Sunday":
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Weekday");
// }

// marks =
// 95-100: Excellent
// 90 - 95: Very good
// 80 - 90: good
// < 80: okaish!

let marks = 101;

switch (true) {
  case marks >= 95 && marks <= 100: // false
    console.log("Excellent");
    break;
  case marks >= 90 && marks <= 94: // false
    console.log("Very good!");
    break;
  case marks >= 80 && marks <= 89: // false
    console.log("Good!");
    break;
  case marks >= 0 && marks <= 79: // false
    console.log("Okayish!");
  default: // default
    console.log("Invalid marks!");
}
