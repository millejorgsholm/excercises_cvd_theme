"use strict";

const firstname = "Annemette";
const first = firstname.substring(2, 3).toUpperCase();
const second = firstname.substring(0, 1).toLowerCase();
const third = firstname.substring(3, 9).toLowerCase();

console.log(`${second}${first}${third}`);
