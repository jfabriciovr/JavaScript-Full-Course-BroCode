// Random Number Generator

// to generate a random number between 1 and 100
//let randomNum = Math.floor(Math.random() * 100) + 1;
//console.log(randomNum);

//to generate a random number between any numbers

// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum1, randomNum2, randomNum3;

myButton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * (max - min)) + min;
  randomNum2 = Math.floor(Math.random() * (max - min)) + min;
  randomNum3 = Math.floor(Math.random() * (max - min)) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
};
