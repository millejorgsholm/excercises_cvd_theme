"use strict";

//We want a function that returns a person's full name from the last name, the first name, and an optional middle name. E.g. "Lind" and "Peter" would return "Peter Lind", whereas "Lind" and "Peter" and "Heronimous" would return "Peter Heronimous Lind".

function fullName(lastName, firstName, middleName) {
  let result = "";
  result = `${firstName} ${middleName ? middleName : ""} ${lastName}`;
  return result;
}

const name = fullName("Bierrings", "Mille", "Jørgsholm");
console.log(name);
