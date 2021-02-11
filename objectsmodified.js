"use strict";

//Using the object from objectbasics.js and changing the variable from let to const

const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

//Changing the name from 29 to 30
person1.age++;
console.log(person1);

//Creating another object
const person2 = {
  firstName: "Mille",
  age: 21,
  student: true,
};

//The variable itself can't be reassignted if it's a const
//The objects can't be changed but the properties can
person1 = person2;
