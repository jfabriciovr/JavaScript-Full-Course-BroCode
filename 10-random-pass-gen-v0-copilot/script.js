document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const password = generatePassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );
  document.querySelector("p").textContent = password;
});

document.getElementById("copy").addEventListener("click", function () {
  const password = document.querySelector("p").textContent;
  navigator.clipboard.writeText(password).then(
    function () {
      document.getElementById("copy-alert").textContent =
        "Password copied to clipboard!";
      // alert("Password copied to clipboard");
    },
    function () {
      document.getElementById("copy-alert").textContent =
        "Failed to copy password!";
      // alert("Failed to copy password");
    }
  );
});

function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}
