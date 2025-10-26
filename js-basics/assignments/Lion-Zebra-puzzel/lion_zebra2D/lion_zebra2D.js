const testCase = ["LZ ", "  Z"];

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
}

function main() {
  indexOfAnimals(testCase);
}

main();
