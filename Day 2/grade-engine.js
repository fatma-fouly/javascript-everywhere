const students = [
  { name: "ali", score: 70, attendance: 80 },
  { name: "ahmed", score: 85, attendance: 90 },
  { name: "mohamed", score: 45, attendance: 50 },
  { name: "sara", score: 95, attendance: 100 },
  { name: "mona", score: 60, attendance: 70 },
  { name: "hassan", score: 55, attendance: 60 },
  { name: "fatma", score: 80, attendance: 85 },
  { name: "youssef", score: 90, attendance: 95 },
];
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeF = 0;
let grade = "";
let totalScore = 0;
let atRisk = 0;
let highestScore = 0;
let lowestScore = 100;
console.log(
  `${"Name".padEnd(10)}${"Score".padStart(6)}${"Attendance".padStart(
    12,
  )}${"Grade".padStart(8)}${"Status".padStart(12)}`,
);
for (const student of students) {
  totalScore += student.score;
  let statuss = "normal";
  if (student.score < 60 || student.attendance < 70) {
    // console.log(`${student.name} At Risk`);
    statuss = "At Risk";
    atRisk++;
  }
  if (student.score > highestScore) {
    highestScore = student.score;
  }
  if (student.score < lowestScore) {
    lowestScore = student.score;
  }
  if (student.score >= 90) {
    grade = "A";
    gradeA++;
  } else if (student.score >= 80) {
    grade = "B";
    gradeB++;
  } else if (student.score >= 70) {
    grade = "C";
    gradeC++;
  } else if (student.score >= 60) {
    grade = "D";
    gradeD++;
  } else if (student.score < 60) {
    grade = "F";
    gradeF++;
  } else {
    console.log("Invalid score");
  }

  console.log(
    `${student.name.padEnd(10)}${String(student.score).padStart(6)}${String(
      student.attendance,
    ).padStart(12)}${grade.padStart(8)}${statuss.padStart(12)}`,
  );
}
console.log("-".repeat(48));

console.log(`The average score is ${totalScore / students.length}`);
console.log(`we have ${atRisk} students at risk`);
console.log(`The highest score is ${highestScore}`);
console.log(`The lowest score is ${lowestScore}`);
