function decode(data) {
  let message = data;
  return +message.slice(1, message.length - 1);
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

function beautify(message) {
  return`${message}\n${("-").repeat(message.length)}`;
}

function testDecoder(description, data, expected) {
  const result = decode(data);
  const isCorrect = result === expected;
  const testParameters = [data, result, expected];
  const resultString = composeResult(description, isCorrect, testParameters);
  console.log(resultString);
}

function testIntergerDecoding() {
  console.log(beautify("Testing List Decoding"));
  testDecoder("numbers 1", "i1e", 1);
  testDecoder("numbers 12", "i12e", 12);
  console.log();
}

function testDecoding() {
  testIntergerDecoding();
  // testStringDecoding();
  // testListDecoding();
}

function main() {
  testDecoding();
}

main();
