"use strict"
function solveEquation(a, b, c){
let arr = [];
let discriminant = b** - 4 * a * c;
}
'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
  if (discriminant < 0) {
    arr;
  } else if (discriminant ===0){
    arr[0] = -b / (2 * a);
  } else if (discriminant > 0){
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  }
  return arr; // array
}
