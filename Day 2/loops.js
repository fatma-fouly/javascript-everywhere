const feedback = [
  {
    score: 58,
    attendance: 80,
  },
  {
    score: 85,
    attendance: 90,
  },
  {
    score: 45,
    attendance: 50,
  },
];

for (let i = 0; i < feedback.length; i++) {
  if (feedback[i].score >= 70 && feedback[i].attendance >= 80) {
    console.log("Certificate awarded");
  } else if (feedback[i].score < 60 || feedback[i].attendance < 50) {
    console.log("Review needed");
  }
}

// for (let i = 0; i < 20; i++) {
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }
// const tracks = ["track1", "track2", "track3", "track4", "track5"];
// let position = 1;

// for (const track of tracks) {
//   console.log(`track ${position} : ${track}`);
//   position++;
// }
// const data = {
//   name: "ali",
//   age: 20,
//   city: "cairo",
//   country: "egypt",
// };
// for (const key in data) {
//   console.log(`${key} : ${data[key]}`);
// }
// let number = 100;

// while (number >= 1) {
//   console.log(number);
//   number = number / 2;
// }

// let number = 10;
// do {
//   console.log(number);
//   number++;
// } while (number < 5);
