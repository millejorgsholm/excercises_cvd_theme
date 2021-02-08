"use strict";

const fullName = "Peter Heronimous Lind";

const firstSpace = fullName.indexOf(" ");
const lastSpace = fullName.lastIndexOf(" ");

const firstName = fullName.substring (0,firstSpace);
const middleName = fullName.substring (firstSpace, lastSpace).trim();
const lastName = fullName.substring(lastSpace);

console.log (`first is ${firstName}
middle is ${middleName}
last is ${lastName}`);