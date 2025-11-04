const VIRAT_SCORE = [75,79,33,80,100,14,52,108,20,7,109,75,113,54,0,54];

function sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if(array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp; 
      }
    }
  }
  return array;
}

function median(array){
  const length = array.length;
  const sortedArr = sort(array);
  let medianValIndex = 0;
  
  if (length % 2 !== 0) {
     medianValIndex = Math.floor(length / 2 );
    return sortedArr[medianValIndex];
  }

  medianValIndex = length / 2;
  const medianVal = (sortedArr[medianValIndex - 1 ] + sortedArr[medianValIndex]) / 2;

  return medianVal;
}

function main () {
  console.log("median score for virat =", median(VIRAT_SCORE));
}

main();
