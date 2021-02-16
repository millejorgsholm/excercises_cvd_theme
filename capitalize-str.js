"use strict";

function capital(str) {
  const first = str.substring(0, 1).toUpperCase();
  const second = str.substring(1, 5).toLowerCase();
  const result = `${first}${second}`;
  return `Hello ${result}`;
}

const name = capital("MiLlE");
console.log(name);
