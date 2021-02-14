"use strict";

const firstname = "Peter";

//Declaring 3 variables "first, second, and third" because the string has to be devided in lowercase, uppercase and lowercase

//Characters at position 0 to 2 has to be written in lowercase
const first = firstname.substring(0, 2).toLowerCase();

//Characters at position 2 to 3 has to be written in uppercase
const second = firstname.substring(2, 3).toUpperCase();

//Characters at position 3 to 5 has to be written in lowercase
const third = firstname.substring(3, 5).toLowerCase();

console.log(`${first}${second}${third}`);
