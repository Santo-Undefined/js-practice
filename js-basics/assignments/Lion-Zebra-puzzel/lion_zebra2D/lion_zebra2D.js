const testCase = ["Z ", "  Z"];

function findAnimals(testCase, animal) {
  const lionPositions = [];
  for (let row = 0; row < testCase.length; row++) {
    for (let col = 0; col < testCase[row].length; col++) {
      if(testCase[row][col] === animal){
        lionPositions.push([row, col]);
      }
    }
  }
  return lionPositions;
};

function indexOfAnimals(testCase) {
  const positionOfLions = findAnimals(testCase, "L");
  console.log("Lion ", positionOfLions);
  const positionOfZerbras = findAnimals(testCase, "Z");
  console.log("Zebra", positionOfZerbras);
  if (positionOfLions.length === 0 || positionOfZerbras.length === 0) {
    return null;
  }
}

function main() {
  console.log(indexOfAnimals(testCase));
}

main();
