const VIRAT_SCORE = [75,79,33,80,100,14,52,108,20,7,109,75,113,54,0,54];

function mean(array){
  let total = 0
  for (let index = 0; index < array.length; index++) {
    total += array[index];
  }
  const meanNumber = total / array.length;
  return meanNumber;  
}

function stdDeviation (array) {
  const meanOfArr = mean(array);
  let deviation = 0;
  for (let index = 0; index < array.length; index++) {
    const pointDeviation = meanOfArr - array[index];
    deviation = deviation + (pointDeviation ** 2); 
  }
  return Math.sqrt(deviation / array.length);
}

function main () {
  console.log("stdDeviation for Virat =", stdDeviation(VIRAT_SCORE));
}

main();
