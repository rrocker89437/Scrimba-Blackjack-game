let cards = []; // array --- 0 then 1
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
//Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");

//Store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector("#sum-el");
// let sumEl = document.getElementById("sum-el");

//Store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el");

// Create a function, getRandomCard()
function getRandomCard() {
  // Make this function return a random number between 1 and 13
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  //return randomNumber;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// Create a new function called startGame() that calls renderGame()
function startGame() {
  isAlive = true;
  // Generate two random numbes
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

// Create a startGame() function. Move the conditional
function renderGame() {
  cardsEl.textContent = "Cards: ";
  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ", ";
  }

  //Render the cards on the page using this format -> "Cards: 10 4"
  //--cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  //render out ALL the cards we have

  //Refer to the cards array when rendering out the cards
  //--cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1];

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
  let card = getRandomCard(); //7

  //Add the new card to the sum variable
  sum += card;

  // Push the card to the cards array
  cards.push(card);
  //Call renderGame()
  renderGame();
}
