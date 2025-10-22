function arraySorting(givenArr) {
 return [1,2,3];
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
  testArraySorting("dry run", [1,2,3], [1,2,3]);
  // testArraySorting();
}

main();
