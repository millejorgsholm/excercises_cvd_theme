"use strict";

//FROM HEX TO RGB
function hextorgb(hex) {
  // hex = "#bada55";

  const r = hex.substring(1, 3);
  const g = hex.substring(3, 5);
  const b = hex.substring(5, 7);

  const r2 = Number.parseInt(r, 16);
  const g2 = Number.parseInt(g, 16);
  const b2 = Number.parseInt(b, 16);

  console.log(`hexkoden er #${r}${g}${b}`);
  console.log(`rgb koden er (${r2},${b2},${g2})`);
}

hextorgb("#C0DE25");

//FROM RGB TO HEX
function rgbtohex(r, g, b) {
  const r2 = r.toString(16).padStart(2, "0");
  const g2 = g.toString(16).padStart(2, "0");
  const b2 = b.toString(16).padStart(2, "0");
  const hex = `#${r2}${g2}${b2}`;

  console.log(`vores rgb er (${r}${g}${b})`);
  console.log(`vores hex kode er ${hex}`);
}

rgbtohex(240, 11, 66);

//FROM CCS to RGB

function csstorgb(css) {
  const firstComma = css.indexOf(",");
  const lastComma = css.lastIndexOf(",");

  const r = css.substring(4, firstComma);
  const g = css.substring(firstComma + 1, lastComma).trim();
  const b = css.substring(lastComma + 1).trim();

  const r2 = Number.parseInt(r);
  const g2 = Number.parseInt(g);
  const b2 = Number.parseInt(b);

  console.log(`vores rgb er ${r}${g}${b}`);
  console.log(`r = ${r2}`);
  console.log(`g = ${g2}`);
  console.log(`b = ${b2}`);
}

csstorgb("rgb(12,56,133)");
