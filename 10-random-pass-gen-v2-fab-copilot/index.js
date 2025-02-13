// RANDOM PASSWORD GENERATOR

const passwordDisplay = document.getElementById("passwordDisplay");
const copyMessage = document.getElementById("copyMessage");
const copiedMessage = document.getElementById("copiedMessage");
const passwordLengthInput = document.getElementById("passwordLength");
const rangeValue = document.getElementById("rangeValue");

const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

passwordLengthInput.oninput = function () {
  rangeValue.textContent = passwordLengthInput.value;
  const value =
    ((passwordLengthInput.value - passwordLengthInput.min) /
      (passwordLengthInput.max - passwordLengthInput.min)) *
    100;
  rangeValue.style.left = `calc(${value}% + (${8 - value * 0.15}px))`;
  generateAndDisplayPassword();
};

includeLowercase.onchange = generateAndDisplayPassword;
includeUppercase.onchange = generateAndDisplayPassword;
includeNumbers.onchange = generateAndDisplayPassword;
includeSymbols.onchange = generateAndDisplayPassword;

passwordDisplay.onclick = function () {
  const password = passwordDisplay.textContent;
  navigator.clipboard.writeText(password).then(() => {
    copiedMessage.style.display = "block";
    setTimeout(() => {
      copiedMessage.style.display = "none";
    }, 1500);
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
    passwordDisplay.textContent = "Include_ at least one category";
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
