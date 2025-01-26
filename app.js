// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
let firstCard = 4;
let secondCard = 10;
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want to draw another card? 🙂");
} else if (sum === 21) {
  console.log("Blackjack! 🥳");
} else {
  console.log("Bust! 😭");
}
