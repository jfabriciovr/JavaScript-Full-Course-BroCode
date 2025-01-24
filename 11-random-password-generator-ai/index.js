// RANDOM PASSWORD GENERATOR

const passwordDisplay = document.getElementById("passwordDisplay");
const copyMessage = document.getElementById("copyMessage");
const passwordLengthInput = document.getElementById("passwordLength");
const passwordLengthValue = document.getElementById("passwordLengthValue");

const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

passwordLengthInput.oninput = function () {
  passwordLengthValue.textContent = passwordLengthInput.value;
  generateAndDisplayPassword();
};

includeLowercase.onchange = generateAndDisplayPassword;
includeUppercase.onchange = generateAndDisplayPassword;
includeNumbers.onchange = generateAndDisplayPassword;
includeSymbols.onchange = generateAndDisplayPassword;

passwordDisplay.onclick = function () {
  const password = passwordDisplay.textContent;
  navigator.clipboard.writeText(password).then(() => {
    copyMessage.style.display = "block";
    setTimeout(() => {
      copyMessage.style.display = "none";
    }, 4000);
  });
};

function generateAndDisplayPassword() {
  const passwordLength = passwordLengthInput.value;

  const includeLowercaseChecked = includeLowercase.checked;
  const includeUppercaseChecked = includeUppercase.checked;
  const includeNumbersChecked = includeNumbers.checked;
  const includeSymbolsChecked = includeSymbols.checked;

  if (
    !includeLowercaseChecked &&
    !includeUppercaseChecked &&
    !includeNumbersChecked &&
    !includeSymbolsChecked
  ) {
    passwordDisplay.textContent = "Try again!, Include_ at least one category";
  } else {
    const password = generatePassword(
      passwordLength,
      includeLowercaseChecked,
      includeUppercaseChecked,
      includeNumbersChecked,
      includeSymbolsChecked
    );

    // Displaying the password
    passwordDisplay.textContent = password;
  }
}

function generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijlknopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!$%&/()=+-";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}
