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
  let alternatingString = string[0];
  let missMatchString = "";

  for (let index = 1; index < string.length; index++) {
    const currentCharacterType = isVowel(string[index]);
    const lastCharacterType = isVowel(string[index -1]);

    if (currentCharacterType !== lastCharacterType) {
      alternatingString = alternatingString +string[index];
    } else {
      missMatchString = missMatchString + "," + string[index];
    }
  }
  
  if (missMatchString.length === 0){
    return alternatingString;
  }
  return alternatingString + missMatchString;
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
  testStrinSplitter("abe", "abe");
  testStrinSplitter("abcdefg", "abef,c,d,g");
  testStrinSplitter("abeci", "abeci");
  testStrinSplitter("apple", "ape,p,l");
  testStrinSplitter("there", "tere,h");
  testStrinSplitter("hello", "helo,l");
  testStrinSplitter("abyss", "ab,y,s,s");
  testStrinSplitter("this", "tis,h");
}

testAll();
