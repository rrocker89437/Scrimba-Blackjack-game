let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]; // array --- 0 then 1
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
//Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");

//Store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector("#sum-el");
// let sumEl = document.getElementById("sum-el");

//Store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el");

// Create a new function called startGame() that calls renderGame()
function startGame() {
  renderGame();
}

// Create a startGame() function. Move the conditional
function renderGame() {
  //Render the cards on the page using this format -> "Cards: 10 4"
  //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  //render out ALL the cards we have
  cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1];

  //Render the sum on the page using this format -> "Sum: 14"
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  //Display the message in the messageEl using messageEl.textContent
  messageEl.textContent = message;
}

//Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
  messageEl.textContent = "Drawing a new card from the deck!";
  //Create a card variable, and hard code its value to a number (2-11)
  let card = 7;
  //Add the new card to the sum variable
  sum += card;
  //Call startGame()
  renderGame();
}
