

function isVowel(character) {
  const vowelString = "aeiou";
  for (let index = 0; index < vowelString.length; index++){
    if (vowelString[index] === character) {
      return true;
    }
  }
  return false;
}

function stringSplitter(string) {
  let spilttedString = "";
  for (let index = 0; index < string.length; index++) {
    const characterType = (isVowel(string[index])) ? "Vowel" : "Consonent";
    console.log(string[index], "is", characterType);

    if (string[index] === "c") {
      spilttedString = spilttedString + ",";
    }

    if (string[index] === "d") {
      spilttedString = spilttedString + ",";
    }
    spilttedString = spilttedString + string[index];
  }
  return spilttedString;
}

function composeResult(string, actual, expected) {
  const result = (actual === expected) ? "✅" : "❌";
  let finalresultString = "Test " + result;
  finalresultString += " | Given Input  = " + string;
  finalresultString += " | expected  = " + expected;
  finalresultString += " | actual  = " + actual;
  return finalresultString;
}

function testStrinSplitter(string, expected) {
  const actual = stringSplitter(string);
  const result = composeResult(string, actual, expected);
  console.log(result);
}

function testAll() {
  testStrinSplitter("a", "a");
  testStrinSplitter("ab", "ab");
  testStrinSplitter("abcd", "ab,c,d");
}

testAll();
