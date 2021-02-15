"use strict";

//Declaring 2 variables "first and second" because the string has to be devided in uppercase and lowercase

//Characters at position 0 to 1 (the first letter) has to be written in uppercase

//Characters at position 1 to 5 (the rest of the letters) has to be written in lowercase

function capitalize(str) {
  console.log(str);
  const first = str.substring(0, 1).toUpperCase();
  const second = str.substring(1, 5).toLowerCase();
  const result = `${first}${second}`;
  console.log(result);
}
const str = "MiLlE ";
capitalize(str);
