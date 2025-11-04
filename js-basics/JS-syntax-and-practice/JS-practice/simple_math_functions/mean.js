const VIRAT_SCORE = [75,79,33,80,100,14,52,108,20,7,109,75,113,54,0,54];

function mean(array){
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    total = total + array[index];
  }
  const meanVal = total / array.length;
  return meanVal;  
}

function main () {
  console.log("Mean score for Virat =", mean(VIRAT_SCORE));
}

main();
