function isVowel(character) {
  const vowelString = "aeiou";
  for (let index = 0; index < vowelString.length; index++) {
    if (vowelString[index] === character) {
      return true;
    }
  }
  return false;
}

function stringSplitter(givenString) {
  let alternatingString = givenString[0];
  let missMatchString = "";

  for (let index = 1; index < givenString.length; index++) {
    const currentCharacterType = isVowel(givenString[index]);
    const lastCharacterType = isVowel(givenString[index - 1]);

    if (currentCharacterType !== lastCharacterType) {
      alternatingString = alternatingString + givenString[index];
    } else {
      missMatchString = missMatchString + "," + givenString[index];
    }
  }

  return alternatingString + missMatchString;
}

function composeResult(result, string, actual, expected) {
  let finalresultString = "Test " + result;
  finalresultString += " | Given Input  = " + string;
  finalresultString += " | expected  = " + expected;
  finalresultString += " | actual  = " + actual;
  return finalresultString;
}

function testStringSplitter(givenString, expected) {
  const actual = stringSplitter(givenString);
  const result = (actual === expected) ? "✅" : "❌";
  const finalResultString = composeResult(result, givenString, actual, expected);
  console.log(finalResultString);
}

function testAll() {
  testStringSplitter("abe", "abe");
  testStringSplitter("abcdefg", "abef,c,d,g");
  testStringSplitter("abeci", "abeci");
  testStringSplitter("apple", "ape,p,l");
  testStringSplitter("there", "tere,h");
  testStringSplitter("hello", "helo,l");
  testStringSplitter("abyss", "ab,y,s,s");
  testStringSplitter("this", "tis,h");
  testStringSplitter("poetry", "pot,e,r,y");
}

testAll();
