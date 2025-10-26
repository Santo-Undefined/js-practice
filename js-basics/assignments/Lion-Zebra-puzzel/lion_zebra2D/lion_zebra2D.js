const MAN = 'manhattan';
const EUC = 'euclidean';

function manhattanMethod(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

function euclideanMethod(p1, p2) {
  const distance = Math.sqrt((p2[1] - p1[1])**2 + (p2[0] - p1[0])**2);
  return Math.trunc(distance*10000) / 10000;
}

function findDistance (p1, p2, metric) {

  if (metric === MAN) {
    return manhattanMethod(p1, p2);
  }

  if (metric === EUC) {
    return euclideanMethod(p1, p2);    
  }
}

function findClosestPoint(lions, zebras, metric){
  let smallestDistance = findDistance(lions[0], zebras[0], metric);
  for (let lionPos = 0; lionPos < lions.length; lionPos++) {
    for (let zerbraPos = 0; zerbraPos < zebras.length; zerbraPos++) {
      
      const distance = findDistance(lions[lionPos], zebras[zerbraPos], metric);
      if (distance < smallestDistance) {
        smallestDistance = distance;
      }
    }
  }
  return smallestDistance;
}

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

function findShortestDist2D(savanna, metric) {
  const positionsOfLions = findAnimals(savanna, "L");
  const positionsOfZerbras = findAnimals(savanna, "Z");

  if (positionsOfLions.length === 0 || positionsOfZerbras.length === 0) {
    return null;
  }

  return findClosestPoint(positionsOfLions, positionsOfZerbras, metric);
}

function composeResult(description, result, parameters) {
  const resultSymbol = result ? "✅" : "❌";
  let resultString = `Test ${resultSymbol} `;
  resultString += ` ${description}`;
  if (resultSymbol === "❌") {
    resultString += `\n\t Input    = ${parameters[0]}`;
    resultString += `\n\t Output   = ${parameters[1]}`;
    resultString += `\n\t Expected = ${parameters[2]}`;
  }
  return resultString;
}

function testFindShortestDist2D(description, savanna, metric, expected) {
  const result = findShortestDist2D(savanna, metric);
  const isCorrect = result === expected;
  const testParameters = [savanna, result, expected];
  const resultString = composeResult(description, isCorrect, testParameters);
  console.log(resultString);
}

function beautify(message) {
  return`\n${message}\n${("-").repeat(message.length)}`;
}

function testManhattanMethod() {
  console.log(beautify("Testing Manhattan method"));
  testFindShortestDist2D("1D savanna MAN", ["LZ"], MAN, 1);
  testFindShortestDist2D("1D savanna MAN", ["L   ",
                                            "  Z ",
                                            "   Z"], MAN, 3);

}

function testEuclideanMethod() {
  console.log(beautify("Testing Euclidean method"));
  testFindShortestDist2D("1D savanna EUC", ["LZ"], EUC, 1);
  testFindShortestDist2D("1D savanna MAN", ["L   ",
                                            "  Z ",
                                            "   Z"], EUC, 2.236);


}

function main() {
  testManhattanMethod();
  testEuclideanMethod();
}

main();
