/* contract
    Inputs should be given as an array of numbers
    Inputs shall not have nested arrays
    All the input numbers should be whole numbers (negative numbers are accepted)
*/
function findSmallestElement (arr) {
  let smallestElement =arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < smallestElement) {
      smallestElement = arr[index];
    }
  }
  return smallestElement;
}

function copyArr(arr) {
  const arrCopy = [];
  for (let index = 0; index < arr.length; index++) {
    arrCopy.push(arr[index]);
  }
  return arrCopy;
}

function arraySorting(givenArr) {
  const arrCopy = copyArr(givenArr);
  const sortedArr = [];
  while (sortedArr.length !== givenArr.length) {
    const smallestElement = findSmallestElement(arrCopy);
    sortedArr.push(smallestElement);
    arrCopy.splice(arrCopy.indexOf(smallestElement), 1); //removing the smallest element
  }
  return sortedArr;
}  

function areEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
}

function composeResult(description, result, parameters) {
  const resultSymbol = result ? "✅" : "❌";
  let resultString = `Test ${resultSymbol} `
  resultString += ` ${description}`
  if (resultSymbol === "❌") {
    resultString += `\n\t Input    = ${parameters[0]}`;
    resultString += `\n\t Output   = ${parameters[1]}`;
    resultString += `\n\t Expected = ${parameters[2]}`;
  }
  return resultString;
}

function testArraySorting(description, givenArr, expectedArr){
  const resultArr = arraySorting(givenArr);
  const isSorted = areEqual(resultArr, expectedArr);
  const testParameters = [givenArr, resultArr, expectedArr];
  const resultString = composeResult(description, isSorted, testParameters);
  console.log(resultString);
}

function main() {
  testArraySorting("simple sorted arrays", [1,2,3], [1,2,3]);
  testArraySorting("simple mixed arrays", [1,4,3], [1,3,4]);
  testArraySorting("empty arrays", [], []);
  testArraySorting("negative numbers", [2,0,-12,-1], [-12,-1,0,2]);
  testArraySorting("multiple similar elements", [2,4,1,2,2,3], [1,2,2,2,3,4]);
}

main();
