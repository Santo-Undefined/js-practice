function encode(data) {
  let message = data;
  if (typeof message === "string") {
    return `${message.length}:${message}`;
  }
  
  if (!isNaN(data * data)) {
    return `i${data}e`;
  }
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

function testEncoder(description, data, expected) {
  const result = encode(data);
  const isCorrect = result === expected;
  const testParameters = [data, result, expected];
  const resultString = composeResult(description, isCorrect, testParameters);
  console.log(resultString);
}

function beautify(message) {
  return`\n${message}\n${("-").repeat(message.length)}`;
}

function testIntergerEncoding() {
  console.log(beautify("Testing Interger Encoding"));
  testEncoder("one digit number 1", 1, "i1e");
  testEncoder("Multi-digit number 123", 123, "i123e");
  testEncoder("Negative number ", -22, "i-22e");
  testEncoder("0", 0, "i0e");
  testEncoder("Infinty", Infinity, "iInfinitye");
  testEncoder("Negative Infinty", -Infinity, "i-Infinitye");
}

function testStringEncoding() {
  console.log(beautify("Testing Byte String Encoding"));
  testEncoder("Single characters", "a", "1:a");
  testEncoder("Double characters", "ab", "2:ab");
  testEncoder("multi-chara byte string", "hello", "5:hello");
  testEncoder("Empty byte string", "", "0:");
  testEncoder("hello world", "hello world", "11:hello world");
  testEncoder("special!@#$chars", "special!@#$chars", "16:special!@#$chars");
}
function main() {
  testIntergerEncoding();
  testStringEncoding();
}

main();
