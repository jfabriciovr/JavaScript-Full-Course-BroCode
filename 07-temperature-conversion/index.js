// Temp conversion
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  temp = Number(textBox.value);
  if (toFahrenheit.checked) {
    // F = ((9xC)/5) + 32
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "℉";
  } else if (toCelsius.checked) {
    // c = ((F - 32)5)/9
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "℃";
  } else {
    result.textContent = "Select something first!";
  }
}
