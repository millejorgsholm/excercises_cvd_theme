"use strict";

//The array, which is a list of items (letters)
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters[4]);

let newarr = letters;
newarr[4] = "*";

console.log(letters[4]);

//QUESTIONS FOR EXCERCISES

//Q: What is the difference between letters and new arr?
//A: Letters is the existing array with letters as items. The newarr is a variable that is the same as the existing array

//Q: How does the entire letters array look before and after the change to newarr?
//A: The 4th variable = e in the letters array. In the newarr the 4th variable is *. We modified the array and the itema in it

//Q: Is it possible to chane one of the arrays without changing the other?
//A: Cannot answer

//Q: What happens if you used const instead of let?
//A: It is not possible to modify an array since const variables is unchangeable
