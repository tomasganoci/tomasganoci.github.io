"use strict";

let nahodneCislo = Math.trunc(Math.random() * 20) + 1;

// Hodnoty pro reset //
let originalMessage = document.querySelector(".message").innerHTML;
let originalScore = document.querySelector(".score").innerHTML;
let originalGuess = document.querySelector(".guess").innerHTML;
let originalNumber = document.querySelector(".number").innerHTML;
let originalBackground = getComputedStyle(
  document.querySelector("body")
).backgroundColor;
let originalNumberWidth = getComputedStyle(
  document.querySelector(".number")
).width;
//
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let scoreNumber = Number(document.querySelector(".score").innerHTML);
let score = document.querySelector(".score");
let highscoreNumber = Number(document.querySelector(".highscore").innerHTML);
let highscore = document.querySelector(".highscore");

document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  let guessNumber = Number(guess);
  console.log(document.querySelector(".guess").value);
  if (!guess) {
    message.innerHTML = "Nezadal jsi číslo!";
  } else if (guessNumber === 0) {
    message.innerHTML = "Zadal jsi 0!";
  } else if (guessNumber > nahodneCislo) {
    message.innerHTML = "Zadal jsi větší číslo!";
    scoreNumber--;
    score.innerHTML = String(scoreNumber);
  } else if (guessNumber < nahodneCislo) {
    message.innerHTML = "Zadal jsi menší číslo!";
    scoreNumber--;
    score.innerHTML = String(scoreNumber);
  } else if (guessNumber === nahodneCislo) {
    message.innerHTML = "Zadal jsi správné číslo!!!";
    number.innerHTML = String(guessNumber);
    document.querySelector("body").style.backgroundColor = "#59b200";
    document.querySelector(".number").style.width = "30rem";

    if (highscoreNumber < scoreNumber) {
      highscore.innerHTML = String(scoreNumber);
      highscoreNumber = scoreNumber;
    }
  } else {
    message.innerHTML = "Toto neznám";
  }
  if (!scoreNumber) {
    message.innerHTML = "Skončil jsi!";
    document.querySelector("body").style.backgroundColor = "#ff0000";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  nahodneCislo = Math.trunc(Math.random() * 20) + 1;
  message.innerHTML = originalMessage;
  number.innerHTML = originalNumber;
  score.innerHTML = originalScore;
  scoreNumber = originalScore;

  document.querySelector(".guess").value = originalGuess;
  document.querySelector(".number").style.width = originalNumberWidth;
  document.querySelector("body").style.backgroundColor = originalBackground;
});
