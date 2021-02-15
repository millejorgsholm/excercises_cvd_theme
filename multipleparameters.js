"use strict";

//Declaring the three global variables -> named the same as the parameters
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
const myOtherName = "Signe";
const type = "cat";
const theaAnimalName = "Alfred";

presentPet("myOtherName, myPet, theAnimalName");

//Function called with strings
presentPet("Signe", "cat", "Alfred");

//Excercises: what if...
//Q: The function is called with variables named the same as the parameters?
//A: It works because they are called the same

//Q: The function is called with variables named something different?
//A: It should use the new parameters -> same variable but a different name for it

//Q: The function is called with strings?
//A: It recieves

//Q: The function is called with a mix of strings and variables?
//A: It should return fine. Because when you send a parameter whether it's a variable or a directly string. It doesn't matter, once it's inside the function

//Q: The function is called with variables but in a different order?
//A: It will be in the same order as you send it -> so it will switch position
