let number = 8;
let binary = 0;
let multiplier = 1;
let remainder = 0;

console.log("The number is" , number);

 while (number >= 1) {
  remainder = number % 2;
  number = number / 2;
  number = number - (number % 1);             // to remove the float values
  binary = binary +(remainder * multiplier);
  multiplier = multiplier * 10;
}

// outputing the values that are being checked
console.log("The binary of is" , binary);

