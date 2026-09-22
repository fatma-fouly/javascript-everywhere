// const string = "morning";
// const number = 5;
// const booleand = true;
// const nullvalue = null;
// let undefined;

// console.log(string, number, booleand, nullvalue, undefined); // morning5truenull53

// const colors = ["red", "yellow", "purple"];

// const studend = {
//   name: "ali",
//   age: 20,
// };

// console.log(colors, typeof colors);
// console.log(studend, typeof studend);

// console.log(typeof nullvalue); // object => js consider null as an object not null
// console.log(typeof []); // array is opject value and we can dealing with it as an object and use object properties with it exact with the object

// Array.isArray(colors);
// const num = Number("42");
// console.log(typeof num);

// const str = String(num);
// console.log(str);
// console.log(typeof str);

// const greeting = Number("Hello");
// console.log(typeof greeting);
// console.log(greeting); // NAN
// console.log(greeting); // NAN    will say it as a not a number wont convert it

// const greeting2 = parseInt("42px"); //  will convert it to number
// console.log(greeting2);
// console.log(typeof NaN);

// const falsy = [false, 0, -0, 0n, "", "1", 1, true, null, undefined, NaN];

// for (let i = 0; i < falsy.length; i++) {
//   console.log(falsy[i] ? "Truthy" : "Falsy");
// }

// const x = 0;
// console.log(x || "default value"); // hena el x falsy f el output haykon default value
// console.log(x ?? "default value"); // hena x not null or undefined so el output haykon 0
// // the second case which u want as a valid value.

// conditions

// let score = 65;

// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 60) {
//   console.log("D");
// } else if (score < 60) {
//   console.log("F");
// } else {
//   console.log("Invalid score");
// }

// console.log(score > 60 ? "pass" : "fail"); // nested ternary wouldnt be readable in below cases so if  is better i think.

// let band = "A";
// switch (band) {
//   case "A":
//     console.log("Excellent");
//   // break;
//   case "B":
//     console.log("Good");
//     break;
//   case "C":
//     console.log("Average");
//     break;
//   case "D":
//     console.log("Poor");
//     break;
//   case "F":
//     console.log("Fail");
//     break;
//   case "default":
//     console.log("Invalid band");
// }

// const scores = [40, 75, 30, 90, 96, 60, 98]; // 75 w 90 will printed - 40 w 30 <50 then skipped - 96 will break the loop so kol ely b3dha not printed
// for (const score of scores) {
//   if (score < 50) {
//     continue;
//   }
//   if (score > 95) {
//     break;
//   }
//   console.log(score);
// }

const numbers = [7, 2, 8, 4, 9, 5, 13, 6];
let sum = 0;
let avg = 0;
let max = numbers[0];
let min = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  // for (let j = i + 1; j < numbers.length; j++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }

  if (numbers[i] > max) {
    max = numbers[i];
  }
  sum = sum + numbers[i];
}
avg = sum / numbers.length;
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
