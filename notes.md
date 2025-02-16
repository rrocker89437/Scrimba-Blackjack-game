//JAVASCRIPT Notes

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//VARIABLES
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

//-- 1. Create a variable, myAge, and set its value to your age
let myAge = 27;
//-- 2. Log the myAge variable to the console
console.log(myAge);

//----------------

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

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//FUNCTIONS
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

//Declared Function
function countdown() {
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
};

//Invoked Function
countdown();

//---------------

//Create a function (you decide the name) that logs out the number 42 to the console
function number() {
console.log(42)
}
//Call/invoke the function
number();

//---------------

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

//Create a function that logs out the sum of all the lap times
function lapSum() {
let total = lap1 + lap2 + lap3;
console.log(total);
// OR
console.log(lap1 + lap2 + lap3);
};
lapSum();

//---------------

// let lapsCompleted = 0

//Create a function that increments the lapsCompleted variable with one
function totalLaps() {
lapsCompleted = lapsCompleted + 1;
};
//-- Run it three times
totalLaps()
totalLaps()
totalLaps()
console.log(lapsCompleted)

//---------------

//THE DOM
//--------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//STRINGS
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

let username = "Per";
// "per" is a string which is inside a variable
console.log(username);

//---------------

//-- Create a variable, message,
//-- that stores the string: "You have tree new notifications"
let message = "You have three new notifications";
console.log(message + ", " + username + "!");
// The text above is called a concactination

//---------------

//-- Create a variable, messageToUser, that contains the message we have logged
let messageToUser = message + ", " + username + "!";
console.log(messageToUser);

//---------------

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

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//GRABBING ELEMENTS BY ID
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

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

//---------------

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

//---------------

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

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//ARRAYS - Ordered list of Items
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

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

//---------------

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

//---------------

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

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//COUNTING in Javascript
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//start at 1
//finish before 11 (10)
// step size = increase by 1 each time

// START............. FINISH..... STEP SIZE
for ( let count = 1; count < 11; count += 1 ) {

    console.log(count)
    //1
    //2
    //3
    //4
    //5
    //6
    //7
    //8
    //9
    //10

}

for ( let count = 1; count < 11; count += 2 ) {

    console.log(count)
    //1
    //3
    //5
    //7
    //9

}

//---------------

// How would we go from 10 to 20?
for ( let count = 10; count < 21; count += 1 ) {

    console.log(count)

}

//---------------

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
for (let count = 10; count < 101; count += 10) {
console.log(count)
}

//---------------

let messages = [
"Hey, how's it going?",
"I'm great, thank you! How about you?",
"All good. Been working on my portfolio lately.",
"Same here!",
"Great to hear",
"🙌"
]
// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

for (let i = 0; i < messages.length; i+= 1){
console.log(mesages[i])
}

//---------------

let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
for (let i = 0; i < cards.length; i++){ //i++ is same as i+=1
console.log(cards[i])
}

//---------------

let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl
// paragraph using a for loop and .textContent
for (let i = 0; i < sentence.length; i+= 1) {
greetingEl.textContent += sentence[i] + ""
}
// How do you keep the spaces between the words
// if I remve them from the array? + ""

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//RETURNING Values
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
if (player1Time < player2Time) {
return player1Time
} else if (player2Time < player1Time) {
return player2Time
} else {
return player1Time
}
}

let fastestRace = getFastestRaceTime()

// Write a function that returns the total race time
function totalRaceTime() {
return player1Time + player2Time
}

let finalTime = totalRaceTime()
// Call/invoke the function and store the returned value in a new variable
console.log(finalTime)
// Finally, log the variable out

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//JAVASCRIPT MATH
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

let randomNumber = Math.random()

console.log(randomNumber)

// What does Math.random() do?

// Your answer:
// it generates a random number between 0 and 1 (not inclusive of 1)

//---------------

let newRandomNumber = Math.random() \* 6

console.log(newRandomNumber)

// In which range will our randomNumber be now?

// From: 0
// To: 5.999999999

//---------------

let flooredNumber = Math.floor(3.45632)

console.log(flooredNumber)

// What does Math.floor() do to positive numbers?

// Your answer: it removes the decimals

//---------------

let myRandomNumber = Math.floor( Math.random() \* 6 )

console.log(myRandomNumber)

// Write down all the possible values randomNumber can hold now!
// 0 | 1 | 2 | 3 | 4 | 5

//---------------

// Try to modify the expression so that we get a range from 1 to 6
let theRandomNumber = Math.floor( Math.random() \* 6 ) + 1

console.log(theRandomNumber)
// 0 | 1 | 2 | 3 | 4 | 5 | 6

//---------------

// Create a function, rollDice(),
// that returns a random number between 1 and 6

function rollDice() {
let randomNumber = Math.floor( Math.random() \* 6 ) + 1
return randomNumber
}
console.log( rollDice() )
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//LOGICAL OPERATORS
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------

// && and operator
// || or operator

let hasCompletedCourse = true
let givesCertificate = true

// if (hasCompletedCourse === true) {
// if (givesCertificate === true) {
// generateCertificate()
// }
// }

if (hasCompletedCourse === true && givesCertificate === true) {
generateCertificate()
}

function generateCertificate() {
console.log("Generating certificate....")
}

//---------------

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
showSolution()
}

function showSolution() {
console.log("Showing the solution....")
}

//---------------

// || or operator
if (hasCompletedCourse === true || givesCertificate === true) {
generateCertificate()
}

//---------------

// Create two boolean variables,
// likesDocumentaries and likesStartups
let likesDocumentaries = true;
let likesStartups = false
// Use an OR statement (||) to call recommendMovie()
// if either of those variables are true
if (likesDocumentaries === true || likesStartups === true) {
recommendMovie()
}

function recommendMovie(){
console.log("Here are movies we recommend")
}

//OBJECTS
//--------------------------------------------------------------------------------------

//Objects - store data in-depth - composite / complex data type
// key-value pairs

let player = {
name: "Per",
chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//---------------

let course = {
title: "Learn CSS Grid for free",
lessons: 16,
creator: "Per Harald Borgen",
length: 63,
level: 2,
isFree: true,
tags: ["html", "css"]
}

console.log( course.tags )

//---------------

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
let castle = {
title: "Live like a king in my castle",
price: 190,
isSuperHost: true,
images: ["img/castle1.png", "img/caste2.png"]
}

// Log out at least two of the keys using the dot notation
console.log(castle.price)
console.log(castle.isSuperHost)

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//QUIZ
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

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
let age = 6

// less than 6 years old -> free
// 6 to 17 years old -> child discount
// 18 to 26 years old -> student discount
// 27 to 66 years old -> full price
// over 66 years old -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
console.log("free")
} else if (age < 18) {
console.log("child discount")
} else if (age < 27) {
console.log("student discount")  
} else if (age < 67) {
console.log("full price")
} else {
console.log("senior citizen discount")
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

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// Use a for loop to log the following to the console:

// The 5 largest countries in the world:

// - China
// - India
// - United States
// - Indinesia
// - Pakistan

function countries(){  
 for (let i = 0; i < largeCountries.length; i+= 1){
console.log("- " + largeCountries[i])
}
}
console.log("The 5 largest countries in the world: ")
countries()

// ------------------------------------------------------------

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function getHand() {
let randomIndex = Math.floor( Math.random() \* 3)
return hands[randomIndex]
}

console.log( getHand() )

// ------------------------------------------------------------

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)

// ------------------------------------------------------------

//<h1>Emoji<br>Fighter</h1>
//<div id="stage"></div>
//<button id="fightButton">Pick Fighters!</button>

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
// Challenge:
// When the user clicks on the "Pick Fighters" button, pick two random
// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
let randomIndexOne = Math.floor( Math.random() x fighters.length )
let randomIndexTwo = Math.floor( Math.random() x fighters.length )
stageEl.textContent =(fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo])
})

// ------------------------------------------------------------
