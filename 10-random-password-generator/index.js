// RANDOM PASSWORD GENERATOR

const generateBtn = document.getElementById("generateBtn");
const passwordDisplay = document.getElementById("passwordDisplay");

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

generateBtn.onclick = function () {
  const passwordLength = 12;
  const includeLowercase = true;
  const includeUppercase = true;
  const includeNumbers = true;
  const includeSymbols = true;

  const password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  //console.log(`Generated password: ${password}`);
  passwordDisplay.textContent = password;
};
