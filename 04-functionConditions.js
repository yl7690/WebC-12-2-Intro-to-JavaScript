var ticketNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var random = Math.floor(Math.random() * ticketNum.length);

function guiding(x) {
  console.log("Your ticket number: "+ x);

  if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
    console.log("Welcome to JS Airlines. According to your ticket number, your boarding gate is Gate 2021. Hurry up. :)");
  } else if (x === 2 || x === 4 || x === 6 || x === 8 || x === 10) {
    console.log("Welcome to JS Airlines. According to your ticket number, your boarding gate is Gate 1202.");
  } else {
    console.log("Welcome to JS Airlines. Your flight is currently experiencing a delay. We are sorry for the inconvenience, but we are not really sorry. :) Just wait.");

  }
}

guiding(ticketNum[random]);
