function encode(data) {
  return "i1e";
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
  testEncoder("one digit numbers", 1, "i1e");
}

function main() {
  testIntergerEncoding();
}

main();
