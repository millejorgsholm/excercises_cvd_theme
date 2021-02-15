"use strict";

function getNameParts(fullName) {
  fullName = "Peter Heronimous Lind";

  //Grunden til jeg erklærer en first- og lastSpace varibel er for at kunne bruge mellemrummene til at opdele min "main string"
  //Erklærer en konstant variabel, som "tager fat i" det første ord før det første mellemrum. Opdele blandt mellemrummene
  const firstSpace = fullName.indexOf(" ");
  //Laver en substring der sørger for at jeg kan bruge det andet mellemrum som en seperator i min "main string"
  const lastSpace = fullName.lastIndexOf(" ");

  //Laver en substring, der tager fat i "fullName" på position 0 før første mellemrum, hvilket er navnet "Peter"
  const firstName = fullName.substring(0, firstSpace);

  //Laver en substring af fullName, som tager fat i "Heronimous", som er mellem firstSpace ogg lastSpace
  const middleName = fullName.substring(firstSpace, lastSpace).trim();

  //Laver en substring af fullName, som tager fat i "Lind", som er navnet efter det sidste mellemrum
  const lastName = fullName.substring(lastSpace);

  console.log(`first is ${firstName}
middle is ${middleName}
last is ${lastName}`);
}

getNameParts();

//The same assignment but instead we use parameters

function fullName(lastName, firstName, middleName) {
  console.log(`Hello my name is ${lastName}, ${firstName}, ${middleName}`);
  const fullName = "Mille";
  const firstSpace = fullName.indexOf(" ");
  const lastSpace = fullName.lastIndexOf(" ");

  firstName = fullName.substring(0, firstSpace);
  middleName = fullName.substring(firstSpace, lastSpace).trim();
  lastName = fullName.substring(lastSpace);
}

fullName("Potter", "Harry", "James");
