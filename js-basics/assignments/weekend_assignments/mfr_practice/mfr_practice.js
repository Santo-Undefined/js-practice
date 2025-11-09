/* Questions */
// based on count
const festive_ribbon = ["red", "blue", "red", "green", "red", "blue"];
const libraryReturnCount = ["Dune", "Dune", "Foundation", "Dune"];
const wildLifeSighting = ["deer", "deer", "rabbit", "deer"]

//  Unique list
const stargazingLog = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]]
const birdWatch = ["sparrow", "crow", "sparrow", "eagle", "crow"];
const classRoomAttendence = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]]
const artWorkshop = [["blue", "yellow"], ["yellow", "green"], ["blue"]]
const lunchBoxIngredients = [["rice", "lentils"], ["rice"], ["curd", "lentils"]]
const parcelSize = ["small", "large", "medium", "small"]

//  Add all elements
const candyJar = [[5, 3], [2], [4, 1]]
const fitnessTracker = [[2, 3, 2], [4], [1, 1]]
const vegetableCrate =[[4, 6], [2, 3, 1], [5]]
const chaptersCompleted = [[1, 2], [3], [2, 4, 1]]

// questions based on .some
const musicRehersalNotes = [["mi", "fa", "so"], ["do", "mi"], ["fa"]]
const choirHarmony = [["la", "la"], ["mi"], ["so", "la"]]

// questions where you check all elements wrt to a threshold
const weatherSensor = [[22, 23], [25, 24, 22], [29]]


const countElements = (array, element) => {
  return array.flat().reduce((result, value) => {
    return value === element ? result + 1 : result;
  }, 0)
}

const getUniqueElementsList = (array) => {
  return array.flat().reduce((result, element) => { 
    if (!result.includes(element)) {
      result.push(element)
    } 
    return result
  },
    [])
}

const addElementValues = (array) => {
  return array.flat().reduce((result, element) => result + element)
}

const isElementPresent = (array, element) => {
 return array.flat().some((value) => value === element);
}

const isAllBelowThreshold = (array, threshold) => {
  const flatArray = array.flat();
  const result = flatArray.every((value) => value < threshold);
  return result;
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

function test(testType, description, input, expected, condition) {
  const result = testType(input, condition);
  const isCorrect = areEqual(result, expected);
  const testParameters = [input, result, expected];
  const resultString = composeResult(description, isCorrect, testParameters);
  console.log(resultString);
}


function testCountElement() {
  const testType = countElements;           // example of reduce
  underline("Testing questions which needs count of elements");
  test(testType, "count blue ribbons cut", festive_ribbon, 2, "blue");
  test(testType, "How many time Dune was returned", libraryReturnCount, 3, "Dune");
  test(testType, "How many time deer was spotted", wildLifeSighting, 3, "deer");

  underline("");
}

function testGetUniqueElementList() {       // example for reduce
  const testType = getUniqueElementsList;
  underline("Testing questions which needs list of unique elements");
  test(testType, "stargazingLog", stargazingLog, ["Orion", "Leo", "Taurus", "Gemini"]);
  test(testType, "Bird watch", birdWatch, ["sparrow", "crow", "eagle"]);
  test(testType, "Classroom attendence check", classRoomAttendence, ["Asha", "Ravi", "Neel", "Meera"]);
  test(testType, "Get unique colours", artWorkshop, ["blue", "yellow", "green"]);
  test(testType, "Get unique lunch box Ingredients", lunchBoxIngredients, ["rice", "lentils", "curd"]);
  test(testType, "Get unique parcel size", parcelSize, ["small", "large", "medium"]);

  underline("");
}

function testAddElementValues() {           // example for reduce
  const testType = addElementValues;
  underline("Testing questions which needs the total values of all elements");
  test(testType, "count number of refills for candy jar", candyJar, 15);
  test(testType, "Fitness tracker total distance covered", fitnessTracker, 13);
  test(testType, "Total weight of vegetable crate", vegetableCrate, 21);
  test(testType, "Total chapters completed by the students", chaptersCompleted, 13);

  underline("");
}

function testIsElementPresent() {           // example for some
  const testType = isElementPresent;
  underline("Testing questions which checks if a element is present");
  test(testType, "Musical notes is \"do\" present", musicRehersalNotes, true, "do");
  test(testType, "Any group said \"so\"", choirHarmony, true, "so");

  underline("");  
}

function testIsAllValueBelowThreshold() {   // example for every
  const testType = isAllBelowThreshold;
  underline("Testing questions which checks all elements are below a certian threshold");
  test(testType, "check if all temperature are below 32", weatherSensor, true, 32);

  underline("");  
}

const main = () => {
  testCountElement();
  testGetUniqueElementList();
  testAddElementValues();
  testIsElementPresent();
  testIsAllValueBelowThreshold();
}

main();
