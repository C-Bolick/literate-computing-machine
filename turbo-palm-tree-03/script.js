// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
    var userInput=parseInt(window.prompt("Amount of characters"));
 var lower=window.confirm('Include lowercase?');
 var upper = window.confirm('Include Uppercase?'); 
 var numbers = window.confirm('Include Numbers?');
 var special= window.confirm("Include Special Characters?");
 if(userInput < 8 || userInput > 128 || isNaN(userInput)){
    alert("Please enter vaild length min 8 - max 128.")
    return ""
 }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

