//My Variables
let cards = []; //an empty array
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = ""; //an empty string

let messageEl = document.getElementById("message-el");
let sumeEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;


// first functoion
 function getRandomcard() {
    let randomNumber = math.floor(math.random() * 13) + 1;
    console.log(randomNumber)
 }