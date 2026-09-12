const user = "fatima";
user = "sara";
console.log(user);

const student = {
  name: "fatima",
  city: "Minya",
};
student.favourateLanguage = "js";
console.log(student.favourateLanguage);

const score = 50;
if (score > 90) {
  console.log("A");
} else if (score > 70) {
  console.log("B");
} else {
  console.log("Fail");
}

const names = ["fatima", "sara", "mona", "ahmed", "muhammad", "Khadija"];
for (let i = 0; i < names.length; i++) {
  if (names[i].length > 6) {
    console.log(names[i]);
  }
}

const students = [
  { name: "sara", score: 92 },
  { name: "omar", score: 68 },
  { name: "lina", score: 79 },
];
let pass = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].score > 70) {
    console.log(`${students[i].name} : ${students[i].score} Pass`);
    pass++;
  } else {
    console.log(`${students[i].name} : ${students[i].score} Fail`);
  }
}

console.log(`${pass} out of ${students.length} passed`);
