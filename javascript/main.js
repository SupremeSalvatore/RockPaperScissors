let result = document.getElementById("result");
let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
let computersChoice = document.getElementById("computersChoice");

let playerWins = 0;
let computerWins = 0;

let userChoice = "";
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener("click", function () {
   let computerChoice = Math.floor(Math.random() * 100 + 1);
   if (computerChoice <= 34) {
      computerChoice = "rock";
   } else if (computerChoice <= 67) {
      computerChoice = "paper";
   } else {
      computerChoice = "scissors";
   }
   userChoice = "rock";
   computersChoice.innerHTML = "Computer chose: " + computerChoice.toUpperCase();
   compare(computerChoice, userChoice);
})
paper.addEventListener("click", function () {
   let computerChoice = Math.floor(Math.random() * 100 + 1);
   if (computerChoice <= 34) {
      computerChoice = "rock";
   } else if (computerChoice <= 67) {
      computerChoice = "paper";
   } else {
      computerChoice = "scissors";
   }
   userChoice = "paper";
   computersChoice.innerHTML = "Computer chose: " + computerChoice.toUpperCase();
   compare(computerChoice, userChoice);
})
scissors.addEventListener("click", function () {
   let computerChoice = Math.floor(Math.random() * 100 + 1);
   if (computerChoice <= 34) {
      computerChoice = "rock";
   } else if (computerChoice <= 67) {
      computerChoice = "paper";
   } else {
      computerChoice = "scissors";
   }
   userChoice = "scissors";
   computersChoice.innerHTML = "Computer chose: " + computerChoice.toUpperCase();
   compare(computerChoice, userChoice);
})

let compare = function (choice1, choice2) {
   if (choice1 == choice2) {
      result.innerHTML = "It's a tie! Try again."
   } else if (choice1 === "rock") {
      if (choice2 === "scissors") {
         result.innerHTML = "Computer Wins!";
         computerWins++;
         computerScore.innerHTML = computerWins;
      } else {
         result.innerHTML = "Congratulations You Win!!!";
         playerWins++;
         userScore.innerHTML = playerWins;
      }
   } else if (choice1 === "paper") {
      if (choice2 === "rock") {
         result.innerHTML = "Computer Wins!";
         computerWins++;
         computerScore.innerHTML = computerWins;
      } else {
         result.innerHTML = "Congratulations You Win!";
         playerWins++;
         userScore.innerHTML = playerWins;
      }
   } else if (choice1 === "scissors") {
      if (choice2 === "rock") {
         result.innerHTML = "Congratulations You Win!";
         playerWins++;
         userScore.innerHTML = playerWins;
      } else {
         result.innerHTML = "Computer Wins!";
         computerWins++;
         computerScore.innerHTML = computerWins;
      }
   }

}
document.getElementById("reset").addEventListener("click", function () {
   window.location.reload();
})
