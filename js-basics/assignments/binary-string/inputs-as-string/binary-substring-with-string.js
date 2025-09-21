// here we tried to implement substring and the input number as a string

const InputString = "10";
const subString = "10";

console.log("\nGiven Input number ", InputString);
console.log("Given sub-string to comapre", subString);

// Making the given input string into a number
let InputNumber = InputString % Infinity;
console.log("String converted to number = ",InputNumber);

// Making Binary of that number
let InputBinary = 0;
let InputBinaryMultiplier = 1;

while (InputNumber >= 1) {
  
  const remainder = InputNumber % 2;
  InputNumber = ( remainder === 0) ? InputNumber : InputNumber - 1; // modifying the number to be alway even number
  InputNumber = InputNumber / 2;
  
  InputBinary = InputBinary + (remainder * InputBinaryMultiplier);  // Making the binary number
  InputBinaryMultiplier = InputBinaryMultiplier * 10;

}

console.log("Binary value of ", InputString, "is = ", InputBinary);

const subStringLength = subString.length
const substringDivider = 10 ** subStringLength;
// console.log("length", subStringLength)
// console.log("Multiplier", substringDivider)

while (InputBinary > 0 ){

  const extractedBinary = InputBinary % substringDivider;

  
  // console.log("ex", extractedBinary) 
  InputBinary = InputBinary / 10;
  InputBinary = InputBinary - (InputBinary % 1);  //this removes any float values
}
