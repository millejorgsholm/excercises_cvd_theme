"use strict";

//Define firstName
let myName = "Mille";
let firstName = "Henrik";
let lastName = "Bierrings";

//Calling the function with two parameters
sayHello(firstName, lastName);

//A function called sayHello recieves one parameter firstName
function sayHello(parm1, parm2) {
  console.log(`Hello my name is ${parm1} and my lastname is ${parm2}`);
}

//Writes Hello ${firstName} in the console

//What happens if...
//Q: The function is called on an earlier line that it is created?
//A: Nothing happens, it is the same. It doesn't matter whether we call the function before or after we created it

//Q: The function is called with a variable called myName?
//A: It doesn't work. If the name of the variable changes, the parameter won't work until it's called the as the variable

//Q: There is another variable called firstName outside the function?
//A: It will work again, because the variable is named the as the parameter is

//Q: The function is called without any parameter?
//A: Nothing happens because the function requires to be called with a parameter

//Q:The function is called with firstName and lastName
//A: It works because we're declaring a variable called lastName and then calling the function with two parameters

//Q: And the function is called with lastName before firstName?
//A: It switches the position so that lastName will appear before firstName in the console.log
