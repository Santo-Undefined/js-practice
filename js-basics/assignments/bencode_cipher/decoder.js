function decodeString(message) {
  const nextIndexOfcolon =  1 + message.indexOf(":");
  const messageLength = +message.slice(0, nextIndexOfcolon - 1);
  return message.slice(nextIndexOfcolon, nextIndexOfcolon + messageLength);
}

function decodeInteger(message) {
  return +message.slice(1, message.length - 1);
}

function decodeDataType(data) {
  if (data === "l") { return "list"; }

  if (data === "i") { return "number"; }

  if (typeof +data === "number") { return "string"; }
}

function decode(data) {
  const message = data;
  const dataType = decodeDataType(message[0]);

  switch (dataType) {
    case "number": return decodeInteger(message);
    case "string": return decodeString(message);
    case "list": return decodeList(message);
    default : return "DataError"
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

function testStringDecoding() {
  console.log(beautify("Testing String Decoding"));
  testDecoder("a", "1:a", "a");
  testDecoder("hello", "5:hello", "hello");
  testDecoder("Empty string", "0:", "");
  testDecoder("9 characters", "9:Hello bro", "Hello bro");
  testDecoder("Hello world", "11:Hello world", "Hello world");
  testDecoder("special!@#$chars", "16:special!@#$chars", "special!@#$chars");
  testDecoder("length over 100", "104:Hello there how are you and I am santo and now I am making the decoder code for the bencode cipher code", "Hello there how are you and I am santo and now I am making the decoder code for the bencode cipher code");
  console.log();
}

function testIntergerDecoding() {
  console.log(beautify("Testing Integer Decoding"));
  testDecoder("numbers 1", "i1e", 1);
  testDecoder("numbers 12", "i12e", 12);
  testDecoder("negative numbers -12", "i-12e", -12);
  testDecoder("0", "i0e", 0);
  testDecoder("scientific terms", "i10e3e", 10E3);
  testDecoder("floating values", "i3.14e", 3.14);
  console.log();
}

function testDecoding() {
  testIntergerDecoding();
  testStringDecoding();
}

function main() {
  testDecoding();
}

main();
