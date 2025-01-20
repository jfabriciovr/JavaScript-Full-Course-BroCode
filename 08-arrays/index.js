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

let moreFruits = ["apple", "orange", "banana"];
let newFruits = [...moreFruits];
console.log(newFruits); // ["apple", "orange", "banana"]

// joining arrays
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...moreFruits, ...vegetables, "eggs", "milk"]; // además de unir los arrays de moreFruits y vegetables, le agregamos otros dos elementos al final
console.log(foods);
// ['apple', 'orange', 'banana', 'carrots', 'celery', 'potatoes', 'eggs', 'milk']
