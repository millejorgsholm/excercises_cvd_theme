"use strict";

//EXCERCISE 1: Making a linebreak with backslash and backslash-n
const longline =
  "A very, very, very, VERY! longline of text, \nthat spans across the width of the editor which is really annoying!";

//EXCERCISE 2: Using accent grave -> inserts value of the variable in the string
const name = "mille";
const drink = "faxe kondi";
const text = `hello ${name},
 would you like a ${drink}?`;

console.log(text);
//Console output: "hello mille, would you like a faxe kondi?"

//EXCERCISE 3: Asking for length of a string
const len = name.length;
console.log(`The name ${name} is ${len} characters long`);

//Console output: "The name mille is 5 characters long"

//EXCERCISE 4: Getting a single character with [index-of-the-character]
const letter = name[0];
console.log(`The first letter of ${name} is ${letter}`);

//Console output: "The first letter of mille is m"

//EXCERCISES CONTINUE IN A NEW JS-FILE. BECAUSE CONST NAME VARIABLE IS ALREADY DEFINED. IT CANNOT BE DEFINED MORE THAN ONCE
