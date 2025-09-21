// here we tried to implement substring and the input number as a string

const InputString = "10";
const subString = "12";

console.log("\nGiven number", InputString);

// Making the given input string into a number
let InputNumber = InputString % Infinity;
console.log(InputNumber);

// Making Binary of that number
let InputBinary = 0;
let InputBinaryMultiplier = 1;

while (InputNumber >= 1) {
  
  const remainder = InputNumber % 2;
  InputNumber = ( remainder === 0) ? InputNumber : InputNumber - 1; // modifying the number to be alway even number
  InputNumber = InputNumber / 2;
  
  InputBinary = InputBinary + (remainder * InputBinaryMultiplier);  // Making the binary number
  InputBinaryMultiplier = InputBinaryMultiplier * 10;

  console.log( InputBinary);

}

// Making the input binary into a string
const InputBinaryString = "" + InputBinary;
console.log(InputBinaryString);
