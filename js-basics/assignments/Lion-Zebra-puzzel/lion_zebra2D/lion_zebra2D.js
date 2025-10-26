const testCase = ["L Z", " "];
const MAN = 'manhattan';
const EUC = 'euclidean';

function findDistance (p1, p2, metric) {

  if (metric === MAN) {
    const distance = Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
    return distance;
  }

  if (metric === EUC) {
    const distance = Math.sqrt((p2[1] - p1[1])**2 + (p2[0] - p1[0])**2);
    return distance;    
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

function main() {
  console.log(findShortestDist2D(testCase, MAN));
  console.log(findShortestDist2D(testCase, EUC));
}

main();
