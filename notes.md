//-- VARIABLES STORE DATA
//let count = 0;

//-- 1. Create a variable, myAge, and set its value to your age
let myAge = 27;
//-- 2. Log the myAge variable to the console
console.log(myAge);
// ------------------------------------------------------------

//-- let firstBatch = 5;
//-- let secondBatch = 7;
//-- let count = firstBatch + secondBatch;
//-- console.log(count);

// --1. Create two variables, myAge and humanDogRatio
//let myAge = 27;
//let humanDogRatio = 7;
//-- 2. Multiply the two together and store the result in myDogAge
//let myDogAge = myAge \* humanDogRatio;
// --3. Log myDogAge to the console
//console.log(myDogAge);
// ------------------------------------------------------------

//let count = 5
//-- count + 1
count = count + 1
console.log(count)

//-- Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
let bonusPoints = 50;
bonusPoints = bonusPoints + 50;
//-- Decrease it down to 25, and then finally increase it to 70
bonusPoints = bonusPoints - 75;
bonusPoints = bonusPoints + 45;
console.log(bonusPoints);
// ------------------------------------------------------------

//FUNCTIONS

//-- Declared Function
function countdown() {
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
};

//-- Invoked Function
countdown();
// ------------------------------------------------------------

//-- Create a function (you decide the name) that logs out the number 42 to the console
function number() {
console.log(42)
}
//-- Call/invoke the function
number();
// ------------------------------------------------------------

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

//-- Create a function that logs out the sum of all the lap times
function lapSum() {
let total = lap1 + lap2 + lap3;
console.log(total);
// OR
console.log(lap1 + lap2 + lap3);
};
lapSum();
// ------------------------------------------------------------

// let lapsCompleted = 0

//-- Create a function that increments the lapsCompleted variable with one
function totalLaps() {
lapsCompleted = lapsCompleted + 1;
};
//-- Run it three times
totalLaps()
totalLaps()
totalLaps()
console.log(lapsCompleted)
// ------------------------------------------------------------
// THE DOM
// Document Object Model

// 1. Document
// The Html Document
// 2. Object
// The document keyword in javascript is of the datatype OBJECT.
// Taking the html document and shoving it into a javascript object.
// 3. Model
// A representation or a modelation. Like the real saturn 5 rocket
// that nasa built, and then there is the lego model.
// Similarly there is the real html youve written in your .html file,
// then there is the javascript model
// REAL -- <h2 id="count-el">0</h2>
// MODEL -- let countEl = document.getElementById("count-el");
// The DOM is how you use javascript to modify a website
// ------------------------------------------------------------

// Strings
let username = "Per";
// "per" is a string which is inside a variable
console.log(username);

//-- Create a variable, message,
//-- that stores the string: "You have tree new notifications"
let message = "You have three new notifications";
console.log(message + ", " + username + "!");
// The text above is called a concactination

//-- Create a variable, messageToUser, that contains the message we have logged
let messageToUser = message + ", " + username + "!";
console.log(messageToUser);

// Create two variables, name and greeting.
// The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
let name = "Miah.";
let greeting = "Hi, My name is ";

// Create a third variable, myGreeting, that contatenates the two strings
let myGreeting = greeting + name;

// Log myGreeting to the console
console.log(myGreeting);

// If you change let name = 42, the 42 becomes a string.
// In a wrestling match between a string and a number, the string always wins.

let point = 4;
let extraPoints = "10";

let totalPoints = point + extraPoints;
console.log(totalPoints);
// result is 410 because you cant add a number to a string.
// What happenes: let totalPoints = "4" + "10";

// What will be the result of these console logs?
console.log(4 + 5) // 9
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100"
// ------------------------------------------------------------

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let myName = "Miah!";
let newGreeting = "Welcome back ";
// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = newGreeting + myName;

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
welcomeEl.innerText = welcomeEl.innerText + "😍";
// OR
welcomeEl.innerText += "😍";
// ------------------------------------------------------------

// let countEl = document.getElementById("count-el")
// let newCount = 0

// function increment() {
// // Change this to use the plus equal technique you've learned
// newCount += 1
// countEl.innerText = newCount
// }

// function save() {
// console.log(newCount)
// }

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
count += 1
countEl.innerText = count
}

function save() {
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
let countStr = count + " - ";
// 3. Render the variable in the saveEl using innerText
saveEl.innerText += countStr ;
// NB: Make sure to not delete the existing content of the paragraph
console.log(count)
}
// ------------------------------------------------------------
//QUIZ
// ------------------------------------------------------------

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
myPoints += 3
}

function remove1Points() {
myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()

// Call the functions to that the line below logs out 10
console.log(myPoints)
// ------------------------------------------------------------

// Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114
// ------------------------------------------------------------

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// HTML
//{ <img src="images/shoe.jpeg" alt="Nike shoe">
//<p>Nike shoe</p>
//<button onclick="errorMessage()">Purchase - $149</button>
//<p id="error"></p> }

let error = document.getElementById("error");

function errorMessage() {
let message = "Something went wrong, please try again";

// console.log(message);  
error.textContent = message;
}
// ------------------------------------------------------------

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")

function add() {
let result = num1 + num2
sumEl.textContent = "Sum: " + result
}

function subtract() {
let result = num1 - num2
sumEl.textContent = "Sum: " + result
}

function divide() {
let result = num1 / num2
sumEl.textContent = "Sum: " + result
}

function multiply() {
let result = num1 \* num2;
sumEl.textContent = "Sum: " + result
}
// ------------------------------------------------------------

// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
//let firstCard = 4;
//let secondCard = 10;
// 2. Create a variable, sum, and set it to the sum of the two cards
//let sum = firstCard + secondCard;

//if (sum < 21) {
//console.log("Do you want to draw another card? 🙂");
//} else if (sum === 21) {
//console.log("Blackjack! 🥳");
//} else {
//console.log("Bust! 😭");
//}

// ------------------------------------------------------------
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
// if less than 21 -> "You can not enter the club!"
// else -> "Welcome!"

//let age = 22

if (age >= 21) {
console.log("Welcome!")
} else {
console.log("You can not enter the club!")
}

// ------------------------------------------------------------
// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

if (age < 100) {
console.log("Not elegible")
} else if (age === 100) {
console.log("Here is your birthday card from the King!")
} else {
console.log("Not elegible, you have already gotten one")
};

// if less than 100 -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else -> "Not elegible, you have already gotten one"

// ------------------------------------------------------------
// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
// let isAlive = true;

// 2. Flip its value to false in the appropriate code block
// if (sum <= 20) {
// console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
// console.log("Wohoo! You've got Blackjack! 🥳")
// hasBlackJack = true
// } else {
// console.log("You're out of the game! 😭")
// isAlive = false;
// }

// 3. Log it out to check that you're doing it right
// console.log(isAlive);

// ------------------------------------------------------------
//Practice boolean conditions

console.log(4 === 3) // false
console.log(5 > 2) // true
console.log(12 > 12) // false
console.log(3 < 0) // false
console.log(3 >= 3) // true
console.log(11 <= 11) // true
console.log(3 <= 2) // false

// ------------------------------------------------------------
let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;
// 1. Declare a variable called message and assign its value to an empty string
let myMessage = "";
// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
myMessage = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
myMessage = "Wohoo! You've got Blackjack! 🥳";
hasBlackJack = true;
} else {
myMessage = "You're out of the game! 😭";
isAlive = false;
}

// 3. Log it out!
console.log(message);
// ------------------------------------------------------------

// Arrays - ordered lists of items

let featuredPosts = [
"Check out my Netflix clone",
"Here's the code for my project",
"I've just relaunched my portfolio"
]

console.log( featuredPosts.length ) // 3
//length is no zero index. it starts at 1

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings
let experience = [
"CEO at Scrimba", //0
"Frontend developer at Xeneta", //1
"People counter for Norstat" //2
]

console.log(experience[1])
console.log(experience[2])
console.log(experience[0])
// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba
// ------------------------------------------------------------

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself.
// Use the three primitive data types you've learned
let aboutMe = [
"My name is Miah",
27,
true
]

// It should contain your name (string), your age (number),
// and whether you like pizza (boolean)
// ------------------------------------------------------------

//Array.push() and .pop()
let cards = [7, 4]
cards.push(6) //adds 6 to array

// Push the newMessage to the messages array, and then log out the array
let messages = [
"Hey, how's it going?",
"I'm great, thank you! How about you?",
"All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)

// How can you remove the last item in an array? Try to google it!
messages.pop(newMessage)
console.log(messages)
