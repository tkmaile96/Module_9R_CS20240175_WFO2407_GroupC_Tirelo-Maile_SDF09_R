//My Variables
let cards = []; //an empty array
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = ""; //an empty string for the message

// Elements from the DOM
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

// player object with name and a the chips

let player = {
    name: "TK",
    chips: 200 
};


playerEl.textContent = player.name + ": $" + player.chips;


// first functoion
 function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1; //Cards from 1 to 13
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
 }
  // Second function to start the game

  function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards =  [];
    sum = 0;


    // adding cards to my array
    let firstCard = getRandomCard(); 
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;

    renderGame();
    
  }

  // Third Function

  function renderGame() {
    cardsEl.textContent = "cards: "
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "; //display all the cards
    }

    sumEl.textContent = "sum: " + sum;

// logic of the game
    if (sum <= 20) {
        message = "Do you want to draw a new card🤔?";
    } else if (sum === 21) {
        message = "Hooray🎉 you've got Blackjack👏🏽";
        hasBlackJack = true;
    } else {
        message = "Oh Sorry🥲 You're out of the game!"
        isAlive = false;
    }

    messageEl.textContent = message; //display the message
  }

  //fourth function to draw a card

  function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard(); 
        sum += card;
        cards.push(card);
        renderGame();

    }
  }