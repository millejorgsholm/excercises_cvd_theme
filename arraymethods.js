"use strict";

//Creating an array
const people = ["Harry", "Ron", "Hermione"];

//Adding an empty variable to store a result
let result;

//Adding a new items one by one to the people-array by using "push"
result = people.push("Draco");
result = people.push("Neville");
result = people.push("Luna");

//Adding two items to the array at once
result = people.push("Fred", "George");

//Show the array and the added items in the browser's console
console.log(result);
console.log(people);

//Using the "pop"-method to remove an element from the array. Makes the length shorter
result = people.pop();

//Using the slice method and splice method
result = people.slice(0, 3);
result = people.splice(1, 0, "Cho");
result = people.splice(result, 1);

//Adds the "Ginny"-item and positions it at index 1 in the array
people[1] = "Ginny";

//Not sure what indexOf does...
result = people.indexOf("Fred");
