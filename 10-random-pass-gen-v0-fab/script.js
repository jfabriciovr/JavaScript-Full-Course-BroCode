// every time the user changes the password length, the password should be updated
document.getElementById("password-length-input").oninput = displayPassword; // oninput changes in real-time

// every time the user changes the checkboxes, the password should be updated
document.getElementById("lowercase-checkbox").onchange = displayPassword;
document.getElementById("uppercase-checkbox").onchange = displayPassword;
document.getElementById("numbers-checkbox").onchange = displayPassword;
document.getElementById("symbols-checkbox").onchange = displayPassword;

function displayPassword() {
  const passwordLength = document.getElementById("password-length-input").value;
  const includeLowercase =
    document.getElementById("lowercase-checkbox").checked;
  const includeUppercase =
    document.getElementById("uppercase-checkbox").checked;
  const includeNumbers = document.getElementById("numbers-checkbox").checked;
  const includeSymbols = document.getElementById("symbols-checkbox").checked;

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    document.getElementById("password-display-text").textContent =
      "Please select at least one category";
  } else {
    const password = generatePassword(
      passwordLength,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );

    // Displaying the password
    document.getElementById("password-display-text").textContent = password;
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
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allowedChars = "";
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}
