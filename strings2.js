"use strict";

//PREVIOUS STRING EXCERCISES ARE IN "STRINGS.JS"

//EXCERCISE 5: Length and index
const name = "Albus Percival Wulfric Brian Dumbledore";
const total = name.length;

console.log(`The total number of characters is: ${total}`);
//Console output: "The total number of characters is: 39"

//EXCERCISE 6: trim()
const str1 = "There is      space here \n   ";
const str2 = str1.trim() + " ";
console.log(`_${str2}_`);
//Console output: There is      space here

//EXCERCISE 7: methods parameters
const fullName = "Mille Jørgsholm Bierrings";
const firstName = fullName.substring(0, 30);
console.log(`first name is: _${firstName}_`);
