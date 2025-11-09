// Questions

// based on count
const festive_ribbon = ["red", "blue", "red", "green", "red", "blue"];

const stargazingLog = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]]




const countElements = (array, element) => {
  const count = array.flat().reduce((result, value) => {
    return value === element ? result + 1 : result;
  }, 0)
  return count
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
function underline(message) {
  return console.log(`${message}\n${("-").repeat(message.length)}`);
}
function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}
function areEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (Array.isArray(array1) && Array.isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function test(testType, description, input, element, expected) {
  const result = testType(input, element);
  const isCorrect = areEqual(result, expected);
  const testParameters = [input, result, expected];
  const resultString = composeResult(description, isCorrect, testParameters);
  console.log(resultString);
}


function testCountElement() {
  const testType = countElements
  underline("Testing questions which needs count of elements");
  test(testType, "count blue ribbons cut", festive_ribbon, "blue", 2);

  underline("");
}

const main = () => {
  testCountElement();
}

main();
