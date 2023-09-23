"use strict";
function stars(x) {
  let a = "";
  for (let i = 1; i <= x; i++) {
    a += "*";
    for (let j = 0; j < i; j++) {
      a += "*";
    }
  }
  return a;
}
console.log("");
console.log("");
