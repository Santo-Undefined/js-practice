const number1 = 100;  //same
const number2 = 50;

if(true){
  const number1 = 10; //same
  let number2 = 30;
  
  console.log("number inside if ",number1);
  console.log("number2 inside if ",number2);

  let number3 = number1 + number2;
  number2 = number2/2;
  
  console.log("number3 inside if ",number3);

}

console.log("number1 outside if ",number1);
console.log("number2 outside if ",number2);

