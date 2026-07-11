// total marks
function calculateTotal(m1, m2, m3) {
  return m1 + m2 + m3;
}

// avg marks
function calculateAvg(total) {
  return total / 3;
}

// grade
/**
 * avg >= 90 -> A
 * avg 75 - 79 -> B
 * avg 60 - 74 -> C
 * avg < 60 -> fail
 */

function calculateGrade(avg) {
  if (avg >= 90) return "A";

  if (avg >= 75) return "B";

  if (avg >= 60) return "C";

  return "Fail";
}

// const total = calculateTotal(80, 75, 90); // 245

// const avg = calculateAvg(total); // ~80

// const grade = calculateGrade(avg); // B

const result = calculateGrade(calculateAvg(calculateTotal(80, 75, 90)));

// console.log("total : " + total);
// console.log("avg : " + avg);
// console.log("grade : " + grade);

console.log(result);
