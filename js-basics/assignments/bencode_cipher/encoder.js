function encodeList(message) {
  if(message.length === 0) {
    return "le";
  }

  let encodedMessage = "";
  for (let index = 0; index < message.length; index++) {
    encodedMessage += encode(message[index]);
  }

  return `l${encodedMessage}e`;
}

function encodeString(message) {
  return `${message.length}:${message}`;
}

function encodeNumber(message) {
  return `i${message}e`;
}

function findDataType(message) {
  if (typeof message === "object") { return "object"; }

  if (typeof message === "string") { return "string"; }

  if (!isNaN(message * message)) { return "number"; }
}

function encode(data) {
  let message = data;
  const messageType = findDataType(message);

  switch (messageType) {
    case "number": return encodeNumber(message);
    case "string": return encodeString(message);
    case "object": return encodeList(message);
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
  return`${message}\n${("-").repeat(message.length)}`;
}

function testIntergerEncoding() {
  console.log(beautify("Testing Interger Encoding"));
  testEncoder("one digit number 1", 1, "i1e");
  testEncoder("Multi-digit number 123", 123, "i123e");
  testEncoder("Negative number ", -22, "i-22e");
  testEncoder("0", 0, "i0e");
  testEncoder("Infinty", Infinity, "iInfinitye");
  testEncoder("Negative Infinty", -Infinity, "i-Infinitye");
  console.log();
}

function testStringEncoding() {
  console.log(beautify("Testing Byte String Encoding"));
  testEncoder("Single characters", "a", "1:a");
  testEncoder("Double characters", "ab", "2:ab");
  testEncoder("multi-chara byte string", "hello", "5:hello");
  testEncoder("Empty byte string", "", "0:");
  testEncoder("hello world", "hello world", "11:hello world");
  testEncoder("special!@#$chars", "special!@#$chars", "16:special!@#$chars");
  console.log();
}

function testListEncoding() {
  console.log(beautify("Testing List Encoding"));
  testEncoder("empty list", [], "le");
  testEncoder("One element string list", ["hi"], "l2:hie");
  testEncoder("Two element string list", ["hi", "hello"], "l2:hi5:helloe");
  testEncoder("One element number list", [1], "li1ee");
  testEncoder("Two element number list", [1, 2], "li1ei2ee");
  testEncoder("Mixed element list", [1, "hi"], "li1e2:hie");
  testEncoder("Nested list with empty list", [1, []], "li1elee");
  testEncoder("Nested list sample 1", ["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
  testEncoder("Nested list sample 2", [0, "", ["test"]], "li0e0:l4:testee");
  testEncoder("Nested list sample 3", ["", 0, []], "l0:i0elee");
  testEncoder("Nested list sample 4", ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
  testEncoder("Nested list crazy", [[], [[]], []], "llelleelee");
  console.log();
}

function main() {
  testIntergerEncoding();
  testStringEncoding();
  testListEncoding();
}

main();
