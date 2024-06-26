var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
//Using the forEach Loop
// var newNumbers = [];
// numbers.forEach(function double(x) {
//   newNumbers.push(x * 2);
// });
// console.log(newNumbers);

//Map is more consise since it simplifies the code as:
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);

//Using the foreachapproach, this would be done by:
// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     newNumbers.push(num);
//   }
// });

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("Accumulator = " + accumulator);
//   console.log("Current Number = " + currentNumber);
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

import emojipedia from "./emojipedia";

const emojiMeaning = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(emojiMeaning);
