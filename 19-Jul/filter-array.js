// let arr = [1, 2, 3, 4, 5];

// const evenArr = arr.filter((val) => {
//   // 2, 4
//   return val % 2 == 0;
// });

// console.log(evenArr);

// ex 2

// let marks = [44, 55, 30, 25, 50, 80, 90];

// const passedMarks = marks.filter((mark) => {
//   return mark >= 33;
// });

// console.log(passedMarks);

let people = [
  { name: "Jitender", city: "mumbai" },
  { name: "riyaz", city: "delhi" },
  { name: "Kamini", city: "delhi" },
  { name: "ravi", city: "ahmedabad" },
  { name: "sumit", city: "bangalore" },
];

// city -> delhi, bangalore or ahmedabad
// there name should contains the char i in it.

const cities = ["delhi", "bangalore", "ahmedabad"];

const fPeople = people.filter((p) => {
  let isCityCorrect = cities.includes(p.city);
  let isNameMatch = p.name.includes("R");

  return isCityCorrect && isNameMatch;
});

console.log(fPeople);
