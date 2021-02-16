function capitalize(str) {
  str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return `Hello ${str}`;
}

const strname = capitalize("MilLE");
console.log(strname);
