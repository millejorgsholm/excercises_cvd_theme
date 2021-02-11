"use strict";

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

//Q: Are these two objects the same?

//Try making one object exactly like the other
student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

//Comparing the objects
if (student1 == student2) {
  console.log("They are the same!");
} else {
  console.log("They are not the same..");
}

//A: console.log output: they are not the same..
//They look the same, but they are two different objects: student 1 and student 2
//The two variables point at two different objects so they are not the same

//Try modifying one object
student1.firstName = "Potty";
console.log(student1);
console.log(student2);

//Both objects are different - student 1 is potty and student 2 is harry
//It's not the same object - they have nothing to do with each other
