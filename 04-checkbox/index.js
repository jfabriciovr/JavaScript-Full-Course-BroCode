const myCheckBox = document.getElementById("myCheckBox");
const visaRadio = document.getElementById("visaRadio");
const masterCardRadio = document.getElementById("masterCardRadio");
const payPalRadio = document.getElementById("payPalRadio");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscribed`;
  } else {
    subResult.textContent = `You are not subscribed`;
  }
  if (visaRadio.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardRadio.checked) {
    paymentResult.textContent = `You are paying with MasterCard`;
  } else if (payPalRadio.checked) {
    paymentResult.textContent = `You are paying with PayPal`;
  } else {
    paymentResult.textContent = `You must select some form of payment`;
  }
};
