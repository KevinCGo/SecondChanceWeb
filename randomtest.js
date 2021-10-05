function stockCalc(price) {
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