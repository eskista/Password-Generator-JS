var generateBtn = document.querySelector("#generate");
var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericSet = "0123456789";
var specialCharacterSet = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Function to write the generated password on password textarea
function displayPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to determine password length and character type based on user's selection
function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to contain? You must a number between 8 and 128."
  );
// Alert user to put number if user provides a value that is not number to passwordLength
  if (isNaN(passwordLength) === true) {
    alert("Password length must be provided as number ONLY!");
    return "";
  }
// alert user to provide input if user has not provided any value
  if (!passwordLength) {
    alert("At least one character type should be selected.");
    return "";
  }
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
    return "";
  }

  if (passwordLength > 128) {
    alert("Password length must less than 129 characters");
    return "";
  }

  var lowercase = confirm("Click OK to confirm including lowercase.");
  var uppercase = confirm("Click OK to confirm including uppercase.");
  var numeric = confirm("Click OK to confirm including numbers.");
  var specialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  //determining password rules

  passwordValue = "";
  password = "";

  if (lowercase) {
    passwordValue += lowerCaseSet;
  }

  if (uppercase) {
    passwordValue += upperCaseSet;
  }

  if (numeric) {
    passwordValue += numericSet;
  }

  if (specialCharacters) {
    passwordValue += specialCharacterSet;
  }

  // Getting random element from available array of ALL characters
  for (var i = 0; i < passwordLength; i++) {
    password += passwordValue.charAt(
      Math.floor(Math.random() * passwordValue.length)
    );
  }

  return password;
}

// Add event listener to generateBtn to show password when clicked
generateBtn.addEventListener("click", displayPassword);
