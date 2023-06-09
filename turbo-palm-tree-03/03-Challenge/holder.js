
// Write password to the; #password input

/*

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*var choices= [];
var startGame = function () {
    var userChoice = window.prompt("Choose R for Rock, P for paper, S for scissors");
    console.log("User Choice: " + userChoice);
    if (!userChoice) {
        return;
    }
    userChoice = userChoice.toUpperCase();
    console.log("User Choice (capital): " + userChoice);
    var index = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[index]
    console.log("Computer Choice: " + computerChoice);
    window.alert("The computer chose " + computerChoice);
    if (userChoice === computerChoice) {
        ties++;
        alert("It's a Tie!")
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "S" && computerChoice === "P") ||
        (userChoice === "P" && computerChoice === "R")
    ) {
        wins++;
        alert("You Won!");
    } else {
        losses++
        alert("You Lost!")
    }
    alert("Statistics:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
    var again = confirm("Do you want to try again?");
    if (again) {
        startGame();
    }
};


/* 0=var ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R,]


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  /*
