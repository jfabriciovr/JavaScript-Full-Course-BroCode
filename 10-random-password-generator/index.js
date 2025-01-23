// RANDOM PASSWORD GENERATOR

const generateBtn = document.getElementById("generateBtn");
const passwordDisplay = document.getElementById("passwordDisplay");
const copyMessage = document.getElementById("copyMessage");

generateBtn.onclick = function () {
  // gettin the length of the password based on the number input
  const passwordLength = document.getElementById("passwordLength").value;

  // obtain true of false depending if the checkboxes are checked or un checked
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  if (
    includeLowercase == false &&
    includeUppercase == false &&
    includeNumbers == false &&
    includeSymbols == false
  ) {
    passwordDisplay.textContent = "Try again!, Include_ at least one category";
  } else {
    const password = generatePassword(
      passwordLength,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );

    // Displaying the password
    passwordDisplay.textContent = password;
  }
};

passwordBox.onclick = function () {
  const password = passwordDisplay.textContent;
  navigator.clipboard.writeText(password).then(() => {
    copyMessage.style.display = "block";
    setTimeout(() => {
      copyMessage.style.display = "none";
    }, 2000);
  });
};

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

  // evaluamos si vamos a incluir los distintos grupos de letras, números o símbolos
  // pretuntamos, es includeLowecase true? si es así,
  // allowedChars += lowercaseChars
  // si no, se le suma una cadena vacía, o sea, se omite
  //luego preguntamos lo mismo para cada caso
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";
  // al final de estas evaluaciones, quedará un string concatenado
  // de los símbolos autorizados

  // console.log(allowedChars);
  // abcdefghijlknopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$%&/()=+-

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}
