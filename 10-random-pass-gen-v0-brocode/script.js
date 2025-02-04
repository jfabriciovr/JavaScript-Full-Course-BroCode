// RANDOM PASSWORD GENERATOR

// ################### function definition ##############
function generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allowedChars = ""; // string that will contain all the allowed characters
  let password = ""; // string that will contain the generated password

  // evaluate if the user wants to include certain characters
  // based on the parameters passed to the function if they are true of false

  // using if statements
  /* 
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;
     */

  // using the ternary operator
  allowedChars += includeLowercase ? lowercaseChars : ""; // if includeLowrcase is true, add lowercaseChars to allowedChars
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numbersChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  // all parameters are true, we will see allowedChars as the concatenation of all the characters
  // "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?"
  //console.log(allowedChars);

  if (passwordLength <= 0) {
    return "Password length must be at least one character";
  }
  if (allowedChars.length === 0) {
    return "At least one character type must be selected";
  }

  for (let i = 0; i < passwordLength; i++) {
    // generate a random number between 0 and the length of allowedChars
    const randomIndex = Math.floor(Math.random() * allowedChars.length);

    // select it as an index from the allowedChars string
    // concatenate to passwoord in every loop until we reach the passwordLength
    password += allowedChars[randomIndex];
  }
  return password;
}
// ------------- end of function definition ------------

// #################### PROGRAM START ##################

//define initial values to pass too the function that generates the password
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// calling a function and storing the result on a constant
const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

// display the resulting password in the console
console.log(`Generated password: ${password}`);
