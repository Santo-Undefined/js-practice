
function stringSplitter(string) {
  return string;
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
}

testAll();
