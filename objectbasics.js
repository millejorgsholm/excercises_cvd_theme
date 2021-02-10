"use strict";

//Creating the object
let person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

//Trying to console.log a non-existing property (lastName)
console.log(person1.lastName);
//console.log output: undefined

//Addding a property (lastName) to the object
person1.lastName = "Lind";

console.log(person1.lastName);
//console.log output: Lind

//How to view the entire object
console.log(person1);
//console.log output: the entire object! The latest version of the object will always be shown

//Trying to remove the property lastName by setting it to undefined
person1.lastName = undefined;

//Checking if the property is removed
console.log(person1.lastName);
//console.log output: undefined -> by setting a property to undefined, it's is still in the object, it's just undefined

//Removing the property lastName completely
delete person1.lastName;
console.log(person1.lastName);
//Conclusion: now the property is completely removed from the object

//The middleName property hasn't been defined
console.log(person1.middleName);
//console.log output: undefined
