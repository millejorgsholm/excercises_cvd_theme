"use strict";

//Declaring the three variables
let myName = "Mille";
let myPet = "dog";
let theName = "Bella";

//Creating the function presentPet
//Assign three parameters: firstName, animalType, animalName
//It doesn't matter what the parameters in the function are named
function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}

//Calling the function with parameters
presentPet("myName, myPet, theName");

//Excercises: what if...
//Q: The function is called with variables named the same as the parameters?
//A: It works because they are named the same

//Q: The function is called with variables named something different?
//A: It doesn't work. The variables are now undefined because the parameters are named the old variable names

//Q: The function is called with strings?
