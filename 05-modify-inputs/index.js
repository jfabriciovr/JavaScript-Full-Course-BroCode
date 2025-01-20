// definición de variables

const telNumBtn = document.getElementById("telNumBtn");
const telNumResult = document.getElementById("telNumResult");

const fullNameBtn = document.getElementById("fullNameBtn");
const firstNameResult = document.getElementById("firstNameResult");
const lastNameResult = document.getElementById("lastNameResult");

// acción de botones
document.getElementById("telNumBtn").onclick = function () {
  const telNumInput = document.getElementById("telNumInput").value;
  const nuevoTel = telNumInput.replaceAll("-", "");
  telNumResult.textContent = nuevoTel;
};

document.getElementById("fullNameBtn").onclick = function () {
  const fullNameInput = document.getElementById("fullNameInput").value;
  // split the full name into parts
  const nameParts = fullNameInput.trim().split(" ");
  console.log(nameParts);
  // trim() removes any extra spaces at the start and end of the input
  // split(" "): splits the input string into an array using the space character as the separator
  // slice(1).join(" "): combines all ramining parts of the array into a single string
  // ensuring multi-part last names are hadled correctly
  const firstName = nameParts[0]; // First Name
  const lastName = nameParts.slice(1).join(" "); // Last Name

  firstNameResult.textContent = firstName;
  lastNameResult.textContent = lastName;
};
