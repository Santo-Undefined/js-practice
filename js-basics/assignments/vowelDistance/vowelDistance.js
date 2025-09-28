function isVowel(character) {
  const vowelString = "aeiou";
  for (let index = 0; index < vowelString.length; index++) {
    if (vowelString[index] === character) { 
      return true; 
    }
  }
  return false;
}

function nextVowelIndex(testCase, startIndex) {
  const testCaseLength = testCase.length;
  for (let index = startIndex; index < testCaseLength; index++) {
    if (isVowel(testCase[index])) {
      return index;
    }
  }
  return -1;
}

function vowelDistance(testCase) {
  let currentVowelIndex = nextVowelIndex(testCase, 0);
  return currentVowelIndex;
}

function composeResult(result, string, actual, expected) {
  let finalresultString = "Test " + result;
  finalresultString += " | Given Input  = " + string;
  finalresultString += " | expected  = " + expected;
  finalresultString += " | actual  = " + actual;
  return finalresultString;
}

function testVowelDistance(testCase, expected) {
  const actual = vowelDistance(testCase);
  const result = (actual === expected) ? "✅" : "❌";
  const finalResultString = composeResult(result, testCase, actual, expected);
  console.log(finalResultString);
}

function testAll() {
  testVowelDistance("bkjdfkja", 7);
}

testAll();
