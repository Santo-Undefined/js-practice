const number = 6;
let factorial = 1;

if (number !==0 ){
  factorial = number
}
if (number === 3 ){
  factorial = 2*3
}
if (number === 4 ){
  factorial = 4*6
}
if (number === 5 ){
  factorial = 5*24
}
if (number === 6){
  factorial = 6*120
}

console.log("Number to find factorial",number);
console.log("Factorial of the given number",factorial);
