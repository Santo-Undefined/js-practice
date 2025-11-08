// Give your inputs here
let number = 10;
const subString = 101:

console.log("\nGiven number", number);

// making the binary
let remainderInBinary = 0 ;
let binaryOfNumber = 0;
let multiplier = 1;

while (number >= 1) {

  remainderInBinary = number % 2;
  number = number / 2;
  number = number - (number % 1);             // to remove the float values
  binaryOfNumber = binaryOfNumber +(remainderInBinary * multiplier);
  multiplier = multiplier * 10;

}

// outputing the values that are being checked
console.log("The binary of is" , binaryOfNumber);
console.log("Substring is ", subString);

// finding the length of multiplier and getting the power of that number
let subStringTemp = subString;
let subStringCounter = 0;
let substringMultiplier = 1;

while (subStringTemp >= 1) {

  subStringTemp = subStringTemp / 10;
  subStringTemp = subStringTemp - (subStringTemp % 1);  // remove float values
  substringMultiplier = substringMultiplier * 10;

}

// counting the similar strings
let tempAfterModulating = 0;
let countOfSubString = 0;

while (binaryOfNumber >= 1 ) {

  tempAfterModulating = binaryOfNumber % substringMultiplier;    //finding substring by modulos 
  countOfSubString = (tempAfterModulating === subString)? countOfSubString+1 : countOfSubString+0;
  binaryOfNumber = binaryOfNumber / 10;
  binaryOfNumber = binaryOfNumber - (binaryOfNumber%1)

}

console.log("The substring is repeating" , countOfSubString , "times\n");
