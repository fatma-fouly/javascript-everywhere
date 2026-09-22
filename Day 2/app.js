const scoreInput = document.getElementById("scoreInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const scoreList = document.getElementById("scoreList");
const clearButton = document.getElementById("clearButton");

const scores = [];
checkButton.addEventListener("click", function () {
  const score = Number(scoreInput.value);
  if (scoreInput.value === "" || isNaN(score) || score < 0 || score > 100) {
    result.textContent = "Please enter a number between 0 and 100.";
    return;
  } else if (score >= 90) {
    result.textContent = "Your grade is A";
  } else if (score >= 80) {
    result.textContent = "Your grade is B";
  } else if (score >= 70) {
    result.textContent = "Your grade is C";
  } else if (score >= 60) {
    result.textContent = "Your grade is D";
  } else if (score < 60) {
    result.textContent = "Your grade is F";
  } else {
    result.textContent = "Invalid score";
  }
  scores.push(score);
  scoreList.innerHTML = "";
  for (let i = 0; i < scores.length; i++) {
    const li = document.createElement("li");
    li.textContent = scores[i];
    scoreList.appendChild(li);
  }
  console.log(scores);
  clearButton.addEventListener("click", function () {
    scoreList.innerHTML = "";
  });
});
