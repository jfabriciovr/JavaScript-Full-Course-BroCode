// Input using HTML Textbox
let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`;
  console.log(username);
};

// type conversion
let age;
document.getElementById("mySubmitAge").onclick = function () {
  age = document.getElementById("myAge").value;
  console.log(age, typeof age); // string
  age = Number(age);
  age += 5;
  console.log(age, typeof age); // number
  document.getElementById("myNewAge").textContent = `Your age + 5 is ${age}`;
};

//constants
const PI = 3.14159;
let radius;
let circumference;
document.getElementById("mySubmitRadius").onclick = function () {
  radius = document.getElementById("myRadius").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById(
    "myCircumference"
  ).textContent = `Circumference = ${circumference}cm`;
};
