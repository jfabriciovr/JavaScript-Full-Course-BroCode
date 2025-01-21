// DICE ROLLER PROGRAM
// funcionamiento:
// - Seleccionar la cantidad de dados que queremos tirar
// - Al presionar el botón Roll Dice, despliega mas abajo:
//  - en texto, qué número salió en cada dado de manera aleatoria
//  -  en imagen, cada uno de los números que salieron de cada dado.

function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  // genera un array dependiendo del numOfDice que seleccionemos en el input
  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1; // random number generator between 1 and 6
    values.push(value);
    images.push(`<img src="dice_images/${value}.jpg" alt="Dice ${value}">`);
  }

  // *** pruebas de consola: ***
  // se elige 3 en el input, es decir, tirar 3 dados.
  // console.log(values); // [4, 3, 1] - en este ejemplo, se seleccionaron tres dados, y se generaron tres números aleatorios que se guardan en un array
  // console.log(images); // se generan 3 elementos de imagen para cada dado - ['<img src="dice_images/5.jpg" alt="Dice 5">', '<img src="dice_images/2.jpg" alt="Dice 2">', '<img src="dice_images/6.jpg" alt="Dice 6">']

  // Resultado en pantalla:
  diceResult.textContent = `dice: ${values.join(", ")}`; // dice: 4, 3, 1
  diceImages.innerHTML = images.join(""); // se muestran tres imágenes de dado correspondientes al 4, al 3 y al 1
}
