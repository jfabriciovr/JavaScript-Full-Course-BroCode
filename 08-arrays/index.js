//@@@@@@@@@@@@@@@@@@@@@@@@@
// arrays
// @@@@@@@@@@@@@@@@@@@@@@@@

// arrays are variable like structures that can
// hold more than one value

fruits = ["apple", "orange", "banana"];

fruits.pop(); // remueve el ultimo elemento
fruits.shift(); // remueve el primer elemento

fruits.unshift("papaya"); // agrega un elemento al inicio del array
fruits.push("strawberry"); // agrega un elemento al final del arraya
//console.log(fruits)

// for (i=0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

for (fruit in fruits) {
  console.log(fruit);
} // impime los ínices solamente
// 0
// 1
// 2

for (fruit of fruits) {
  console.log(fruit);
}
// papaya
// orange
// strawberry

console.log(fruits.sort());
// ["orange", "papaya", "strawberry"]
console.log(fruits.sort().reverse());
// ["strawberry", "papaya", "orange"]

//@@@@@@@@@@@@@@@@@@@@@@@@@2
// spread operator ...
// @@@@@@@@@@@@@@@@@@@@@@@
// allows an iterable such as an array
// or string to be expanded
// into seperate elements
// (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
// en este ejemplo, al usar la función Math.max,
// si quieremos pasar directamente el array numbers
// mandaría error, pero usando el spread operator
// ya deja que la función examine los elementos dentro del array
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(...numbers); // 1 2 3 4 5
console.log(`max-element: ${maximum}, min-element: ${minimum}`);
// max-element: 5
// min-element: 1

//  también se puede utilizar con strings para
// dividir la cadena en sus caracteres individuales

let username = "Bro Code";
let letters = [...username]; // convierte en un array donde cada letra es un elemento
console.log(letters);
// ['B', 'r', 'o', ' ', 'C', 'o', 'd', 'e']

// para convertir de nuevo el array en un string:
let newUserName = letters.join("");
console.log(newUserName, typeof newUserName); // "Bro Code" string

// @@@@@@@@@@@@@@@@@@@@@
// copying arrays
// @@@@@@@@@@@@@@@@@@@@@
let moreFruits = ["apple", "orange", "banana"];
let newFruits = [...moreFruits];
console.log(newFruits); // ["apple", "orange", "banana"]

// joining arrays
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...moreFruits, ...vegetables, "eggs", "milk"]; // además de unir los arrays de moreFruits y vegetables, le agregamos otros dos elementos al final
console.log(foods);
// ['apple', 'orange', 'banana', 'carrots', 'celery', 'potatoes', 'eggs', 'milk']

//@@@@@@@@@@@@@@@@@@@@@@@
// rest parameters = (...rest) allow a function work with a variable number of arguments
// by bundling them into an array

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

// Example 1 #########################
function openFridge(...foods) {
  console.log(foods); // ["pizza", "hamburger", "hotdog", "sushi"]
}
function openFridge2(...foods) {
  // rest operator , primero los agrupa en un array
  console.log(...foods); // spread operator // pizza hamburguer hotdog sushi // ya no son un array
}
function getFood(...foods) {
  return foods; //returns the array: ['pizza', 'hamburger', 'hotdog', 'sushi']
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4);
openFridge2(food1, food2, food3, food4);

const foodss = getFood(food1, food2, food3, food4);
console.log(foodss); //['pizza', 'hamburger', 'hotdog', 'sushi']

// Example 2 #########################

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    // este for es especial para arrays
    result += number;
  }
  return result;
}

const total = sum(1, 2, 3, 4); // se pueden pasar todos los argumentos que sean
console.log(`Your total is $${total}`); // $10

// Example 3 #########################

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const average = getAverage(75, 100, 85, 90, 50);
console.log(`The average score is: ${average}`); // 80

// Example 4 #########################
// combine strings
function combineStrings(...strings) {
  // using REST PARAMETERS to make an array of the strings
  return strings.join(" "); // combines all elements lf the array into one string
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName, typeof fullName); // "Mr. Spongebob Squarepants III" string
