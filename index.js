//My Variables
let cards = []; //an empty array
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = ""; //an empty string

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;


// first functoion
 function getRandomcard() {
    let randomNumber = math.floor(math.random() * 13) + 1; //Cards from 1 to 13
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
 }
  // Second function

  function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards =  [];
    sum = 0;

    // adding cards to my array
    let firstCard = getRandomcard();
    let secondCard = getRandomcard();
    cards.push(firstCard + secondCard);
    sum = firstCard + secondCard;

    renderGame();
    
  }

  // Third Function

  function renderGame() {
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }

    messageEl.textContent = message;
  }