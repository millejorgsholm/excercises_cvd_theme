"use strict";

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  { name: "Leeloo", type: "dog" },
  {
    name: "ScoobyDoo",
    type: "dog",
  },
];

//Function tests if an animal is a cat
function isCat(animal) {
  if (animal.type === "cat") {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

isCat(animals[3]);

//Two test functions
function all(animal) {
  return true;
}

function none(animal) {
  return false;
}

//Calling animals.filter with each function
animals.filter(all);
animals.filter(none);

//Result: When calling "all", every array object shows. When calling "none", no array objects are shown
//Explanation: "function all" and "funtion none" are so-called "criteria functions"

//Filtering the cats
const onlyCats = animals.filter(isCat);

//Creating a isDog function -> checks if an animal is a dog
function isDog(animal) {
  if (animal.type === "dog") {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

//Filtering the dogs
const onlyDogs = animals.filter(isDog);
