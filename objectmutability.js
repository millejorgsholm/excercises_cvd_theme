"use strict";

const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

let person2 = {
  firstName: "other Peter",
  age: 28,
  student: false,
};

//Person1 and person 2 are refering two different objects
//Person 3 references the person 1 object
//Both person1.firstName and person3.firstName chanes to "Changed"
let person3 = person1;

person3.firstName = "Changed";

//Person 3 is no longer referring the same object as person1
//Now person3 is reffering the same object as person 2 is
person3 = person2;

//When we take person2 and change the firstName to "also changed", the value changes for both person2 and person3 because they are reffering to the same object
person2.firstName = "Also Changed";

//person1 is now pointing to the same object as the other variables (person2 person3)-> all variables are pointing at the person2-object
//the person1 object is now un-used and being removed because no variables are pointing at it -> the object is gone
person1 = person3;
//console.log output: Assignment to constant variable
