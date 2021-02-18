"use strict";

function randomBackground() {
  console.log("randomBackground");

  //Declaring variables
  const color = randomcolor();
  const css = rgbToCSS(color);
  setBackgroundColor(css);
}

function randomcolor() {
  console.log("randomColor");

  //A random color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  //Return rgb
  return { r, g, b };

  rgbToCSS({ r, g, b });
}

function rgbToCSS(rgbToCSS) {
  console.log("rgbToCSS");
}

function setBackgroundColor(cssColorString) {
  console.log("setBackgroundColor");
  document.querySelector("body").style.backgroundColor = cssColorString;
}
