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
    Excellent++;
  } else if (student.score >= 70 && student.score < 90) {
    good++;
  } else {
    needWork++;
  }
}
console.log(`Excellent: ${Excellent} Good: ${good} Need Work: ${needWork}`);
