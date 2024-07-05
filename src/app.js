/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function CartaAleatoria() {
  //write your code here
  let numerosCartas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];

  function getRandomInt12(MyArray) {
    let randomNumber12 = Math.floor(Math.random() * MyArray.length);
    return randomNumber12;
  }
  return numerosCartas[getRandomInt12(numerosCartas)];
}

function PaloAleatorio() {
  let Palo = ["♦️", "♥️", "♠️", "♣️"];
  function getRandomInt4(Array) {
    let randomnumber4 = Math.floor(Math.random() * Array.length);
    return randomnumber4;
  }
  return Palo[getRandomInt4(Palo)];
}
let paloAleatorio1 = PaloAleatorio();
document.getElementById("numeros").innerHTML = CartaAleatoria();
document.getElementById("Palos1").innerHTML = paloAleatorio1;
document.getElementById("Palos2").innerHTML = paloAleatorio1;
document.getElementById("reloadButton").addEventListener("click", function() {
  location.reload();
});
document.getElementById("countdown").addEventListener("click", function() {
  location.reload();
});
// Inicializa la cuenta atrás en 10 segundos
let countdown = 10;

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  countdownElement.textContent = countdown;

  countdown--;

  if (countdown < 0) {
    clearInterval(interval);

    location.reload();
  }
}

const interval = setInterval(updateCountdown, 1000);
