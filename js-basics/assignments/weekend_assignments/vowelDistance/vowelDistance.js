function isVowel(character) {
  const vowelString = "aeiou";
  for (let index = 0; index < vowelString.length; index++) {
    if (vowelString[index] === character) { 
      return true; 
    }
  }
  return false;
}

function findNextVowelIndex(testCase, startIndex) {
  const testCaseLength = testCase.length;
  for (let index = startIndex; index < testCaseLength; index++) {
    if (isVowel(testCase[index])) {
      return index;
    }
  }
  return -1;
}

function vowelDistance(testCase) {
  let currentVowelIndex = findNextVowelIndex(testCase, 0);
  let nextVowelIndex = findNextVowelIndex(testCase, currentVowelIndex + 1);
  let currentVowelDistance = testCase.length;
  if (nextVowelIndex === -1) {
    return -1;
  }
  while (nextVowelIndex <= testCase.length - 1) {

    nextVowelIndex = findNextVowelIndex(testCase, nextVowelIndex);
    const distance = nextVowelIndex - currentVowelIndex;
    if (distance < currentVowelDistance) {
      currentVowelDistance = distance;
      currentVowelIndex = nextVowelIndex;
    }
    nextVowelIndex++;
  }
  return currentVowelDistance;
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
  testVowelDistance("ab", -1);
  testVowelDistance("aa", 1);
  testVowelDistance("aba", 2);
}

testAll();
