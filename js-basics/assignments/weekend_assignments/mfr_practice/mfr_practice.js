// Questions

// based on count
const festive_ribbon = ["red", "blue", "red", "green", "red", "blue"];

//  Unique list
const stargazingLog = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]]
const birdWatch = ["sparrow", "crow", "sparrow", "eagle", "crow"];
const classRoomAttendence = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]]

//  Add all elements
const candyJar = [[5, 3], [2], [4, 1]]

// questions based on .some
const musicRehersalNotes = [["mi", "fa", "so"], ["do", "mi"], ["fa"]]

const countElements = (array, element) => {
  const count = array.flat().reduce((result, value) => {
    return value === element ? result + 1 : result;
  }, 0)
  return count
}

const getUniqueElementsList = (array) => {
  const flatArray = array.flat()
  const result = flatArray.reduce((result, element) => {
    if (!result.includes(element)) {
        result.push(element)
      }
    return result},
    [])
  return result
}

const addElementValues = (array) => {
  const flatArray = array.flat()
  const total = flatArray.reduce((result, element) => result + element)
  return total
}

const isElementPresent = (array, element) => {
  const flatArray = array.flat();
  const result = flatArray.some((value) => value === element);
  return result
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

function test(testType, description, input, expected, element) {
  const result = testType(input, element);
  const isCorrect = areEqual(result, expected);
  const testParameters = [input, result, expected];
  const resultString = composeResult(description, isCorrect, testParameters);
  console.log(resultString);
}


function testCountElement() {
  const testType = countElements;
  underline("Testing questions which needs count of elements");
  test(testType, "count blue ribbons cut", festive_ribbon, 2, "blue");

  underline("");
}

function testGetUniqueElementList() {
  const testType = getUniqueElementsList;
  underline("Testing questions which needs list of unique elements");
  test(testType, "stargazingLog", stargazingLog, ["Orion", "Leo", "Taurus", "Gemini"]);
  test(testType, "Bird watch", birdWatch, ["sparrow", "crow", "eagle"]);
  test(testType, "Classroom attendence check", classRoomAttendence, ["Asha", "Ravi", "Neel", "Meera"]);

  underline("");
}

function testAddElementValues() {
  const testType = addElementValues;
  underline("Testing questions which needs the total values of all elements");
  test(testType, "count number of refills for candy jar", candyJar, 15);

  underline("");
}

function testIsElementPresent() {
  const testType = isElementPresent;
  underline("Testing questions which checks if a element is present");
  test(testType, "Musical notes is \"do\" present", musicRehersalNotes, true, "do");

  underline("");  
}
const main = () => {
  testCountElement();
  testGetUniqueElementList();
  testAddElementValues();
  testIsElementPresent();

}

main();
