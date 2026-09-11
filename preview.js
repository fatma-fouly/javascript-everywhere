// const user = "fatima";
// user = "sara";
// console.log(user);

// const student = {
//   name: "fatima",
//   city: "Minya",
// };
// student.favourateLanguage = "js";
// console.log(student.favourateLanguage);

// const score = 50;
// if (score > 90) {
//   console.log("A");
// } else if (score > 70) {
//   console.log("B");
// } else {
//   console.log("Fail");
// }

// const names = ["fatima", "sara", "mona", "ahmed", "muhammad", "Khadija"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i].length > 6) {
//     console.log(names[i]);
//   }
// }

const students = [
  { name: "sara", score: 92 },
  { name: "omar", score: 68 },
  { name: "lina", score: 79 },
  { name: "ali", score: 89 },
  { name: "fatima", score: 55 },
];
let Excellent = 0;
let good = 0;
let needWork = 0;
for (const student of students) {
  if (student.score >= 90) {
    // console.log(`${student.name} : ${student.score} Pass`);
    Excellent++;
  } else if (student.score >= 70 && student.score < 90) {
    good++;
  } else {
    needWork++;
    // console.log(`${student.name} : ${student.score} Fail`);
  }
}
console.log(`Excellent: ${Excellent} Good: ${good} Need Work: ${needWork}`);

// console.log(`${pass} out of ${students.length} passed`);
