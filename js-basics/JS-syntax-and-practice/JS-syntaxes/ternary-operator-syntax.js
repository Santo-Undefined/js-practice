/* 
Ternary operator:
The ternary operator is used as a kind of simple 'if else' for only two SpeechRecognitionResultList
 */


const a = 10;
const b = 20;
const c = 30;
//   syntax:
const variable = (a > b) ? "A is bigger" : "B is bigger";
//              conditon ⬆️  trueCondition   falseCondition
//                 ternary operator

console.log("The result is", variable);
// expected result is "B is bigger"


// nested ternary example
const variable2 = (a > b) ? ((a > c) ? "A is the largest number" : "A is a number") : "A is a number";
console.log(variable2);
