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

// player object with name and a the chip
let player = {
    name: "TK",
    chips: 200 
};

//Display player name and the chip on the website
playerEl.textContent = player.name + ": $" + player.chips;


// first functoion
 function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1; //Cards from 1 to 13
    if (randomNumber > 10) {
        return 10; // cards like 11, 12 and 13 should be 10
    } else if (randomNumber === 1) {
        return 11; // Ace or 1 can be 11
    } else {
        return randomNumber; // cards from 2-10 should be returned as they are
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
        message = "Do you want to draw a new card🤔?"; //sum of cards is less than 20
    } else if (sum === 21) {
        message = "Hooray🎉 you've got Blackjack👏🏽"; // sum of cards is exactly 21
        hasBlackJack = true;
    } else {
        message = "Oh Sorry🥲 You're out of the game!" // sum of cards is above 21
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