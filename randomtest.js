/* function stockCalc(price) {
  let priceCost = 1 * price;
  const stockOrder = priceCost;
  if (stockOrder > 21)
    text = `Time to sell your positions! The price for CLOV is $ ${stockOrder}!`;
  else if (stockOrder < 12.5)
    text = `Time to buy some stocks! The price for CLOV is $ ${stockOrder}!`;
  return text;
}
const price = [5, 10, 15, 20, 25, 30, 35, 40];
const stockTotal = stockCalc(price[5]);
console.log(stockTotal);

/* // Function to calculate Loss.
function Loss(currentPrice, previousPrice) {
  let Loss = previousPrice - currentPrice;

  return Loss;
}

// Function to calculate Profit.
function Profit(currentPrice, previousPrice) {
  let Profit = currentPrice - previousPrice;

  return Profit;
}
//input a value of the stock price; any price of a stock.
let currentPrice = 100,
  previousPrice = 40;

if (previousPrice == currentPrice)
  console.log("There are no gained profit or loss!");
else if (previousPrice < currentPrice)
  console.log("$" + Profit(currentPrice, previousPrice) + " is the gained profit!");
else
  console.log("$" + Loss(currentPrice, previousPrice) + " is the loss!");
 */


  /*
// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}
*/
/*
for (let s=1; s<11; s++) {
  console.log(`Your shoe costs is $ ${s*50}`);
}*/

/*
var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}   */

/*
function foodCalc (wings, corona, henessy) {
        let wingCost = (1.50*wings);
        let coronaCost = (8*corona);
        let hennessyCost= (8*henessy);
        const foodOrder= (wingCost + coronaCost + hennessyCost);
            if (foodOrder>300) text = `You have overspent tonight, your total is ${foodOrder}!`;
            else if (foodOrder<300) text = `You have enough money still to spend. your total is ${foodOrder}!`;
            return text;
      }

      const wings= [15,20,40];
      const corona=[1,5,10]; 
      const hennessy = [3,5,6];
      const foodTotal = foodCalc (wings[2],corona[2],hennessy[2]);
      console.log(foodTotal);
*/

/*
function gtankCost (x){
  let gallons = x; //set the amount of gallons.
  let gas = (3.15*x); //multiply the gallon to 1 gallon gas price which is $3.15.
  console.log(`This is gallon # ${gallons} and the total is $${gas}.`)
}
for (let x=1; x<21; x++) { //x should be 1 as it starts at 1. x <21 - Limited to 20 only.
  gtankCost(x);
}
*/

/*
let myAge = 29
let earlyYears = 2
earlyYears *=10.5
let laterYears = myAge - 2
laterYears *=4;

let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Kevin'.toLowerCase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
*/

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput==='rock' || userInput==='paper' || userInput==='scissors'){
      return userInput;
  } else {
      return console.log('Error! Please type rock, paper, or scissors!')
  }
}
// console.log(getUserChoice('rock'));
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3); // chooses from 0-2
  switch (randomNumber){
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors';
  }
};
console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a Tie!";
  }
if (userChoice === "rock") {
  if (computerChoice === "paper") {
    return "Sorry, You lose.";
  }
} else {
  return "Congrats, YOU WIN!";
}
if (userChoice === "paper") {
  if (computerChoice === "scissor") {
    return "Sorry, You lose.";
  }
} else {
  return "Congrats, YOU WIN!";
}
if (userChoice === "scissor") {
  if (computerChoice === "rock") {
    return "Sorry, You lose.";
      }
  } else {
    return "Congrats, YOU WIN!";
  }
};
// const playGame = ()=>{
// }
const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();
console.log('You threw ' + userChoice);
console.log('Computer threw ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
// playGame()

