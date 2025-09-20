// Factorial
const fact_number = 10;
let factorial =1;

for(let increment = 1 ; increment <= fact_number ; increment++){

  factorial = factorial * increment;
  console.log(factorial);
  
}

console.log("Factorial of ", fact_number , "is" , factorial);
