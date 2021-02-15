"use strict";

//Define firstName
const firstName = "Henrik";
const lastName = "Bierrings";

//Calling the function
sayHello("Henrik");

//A function called sayHello recieves one parameter firstName
function sayHello(firstName) {
  console.log(`Hello my name is ${firstName}`);
}

let myName = "Mille";
sayHello(myName);

sayHello(firstName, lastName);
sayHello(lastName, firstName);

//Writes Hello ${firstName} in the console

//What happens if...
//Q: The function is called on an earlier line that it is created?
//A: Nothing happens, it is the same. It doesn't matter whether we call the function before or after we created it -> if it exists anywhere in the js file you can call it

//Q: The function is called with a variable called myName?
//A: It console.logs both "myName" and "firstName", because myName is a local variable

//Q: There is another variable called firstName outside the function?
//A: It console.logs firstName because it uses the local variable and ignores the global variable

//Q: The function is called without any parameter?
//A: It will say "hello undefined" -> the variable is undefined because there's no parameter in the function

//Q:The function is called with firstName and lastName
//A: It only calls "firstName", because in the console.log, it only recieves the parameter "firstName"

//Q: And the function is called with lastName before firstName?
//A: It switches the position so that lastName will appear before firstName in the console.log -> the lastName parameter is called before firstName
