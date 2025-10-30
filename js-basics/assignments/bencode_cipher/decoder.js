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
  return 'i' + message + 'e';
}

function findDataType(message) {
  if (typeof message === "object") { return "object"; }

  if (typeof message === "string") { return "string"; }

  if (!isNaN(message * message)) { return "number"; }

  if ("" + message === "NaN") { return "number"; }
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

function removeLastData(message, decodedList) {
  const lastIndexOfDecode = decodedList.length - 1
  const lenOfLastData = encode(decodedList[lastIndexOfDecode]).length;
  return message.slice(lenOfLastData);

}

function decodeList(message, list) {
  let messageCopy = message;
  if(messageCopy[0] === "e") {
    return [messageCopy, list];
  }
  const decodedList = [];
  while(messageCopy.length > 1) {
    const data = decode(messageCopy);
    if(data !== undefined) {
      decodedList.push(data);
      messageCopy = removeLastData(messageCopy, decodedList);
    } else {
      messageCopy = removeLastData(messageCopy, "e");
    }
  }

  return [messageCopy,decodedList];
}

function decodeString(message) {
  const nextIndexOfcolon =  1 + message.indexOf(":");
  const messageLength = +message.slice(0, nextIndexOfcolon - 1);
  return message.slice(nextIndexOfcolon, nextIndexOfcolon + messageLength);
}

function decodeInteger(message) {
  let indexOfE = message.indexOf("e");
  if (message[indexOfE + 1] === "+" || message[indexOfE + 1] === "-") {
    const moddedMessage = message.replace("e", "X");
    indexOfE = moddedMessage.indexOf("e");
  }
  return +message.slice(1, indexOfE);
}

function decodeDataType(data) {
  if (data === "l") { return "list"; }
  
  if (data === "e") { return "e"; }

  if (data === "i") { return "number"; }

  if (typeof +data === "number") { return "string"; }
}

function decode(data) {
  const message = data;
  const dataType = decodeDataType(message[0]);

  switch (dataType) {
    case "number": return decodeInteger(message);
    case "string": return decodeString(message);
    case "list": return decodeList(message.slice(1), [])[1];
    case "e": return ;
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

function isArray(x) {
  return typeof x === 'object';
}
function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}
function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function testDecoder(description, data, expected) {
  const result = decode(data);
  const isCorrect = areDeepEqual(result, expected);
  const testParameters = [data, result, expected];
  const resultString = composeResult(description, isCorrect, testParameters);
  console.log(resultString);
}

function testListDecoding() {
  console.log(beautify("Testing List Decoding"));
  testDecoder("empty list", "le", []);
  testDecoder("One element string list", "l2:hie", ["hi"]);
  testDecoder("Two element string list", "l2:hi5:helloe", ["hi", "hello"]);
  testDecoder("One element number list", "li1ee", [1]);
  testDecoder("Two element number list", "li1ei2ee", [1,2]);
  testDecoder("Mixed list", "li1e2:hie", [1, "hi"]);
  testDecoder("Nested list with empty list", "li1elee", [1, []]);
  testDecoder("Nested list sample 1", "l5:applei123el6:bananai-5eee", ["apple", 123, ["banana", -5]]);
  testDecoder("Nested list sample 2", "li0e0:l4:testee", [0, "", ["test"]]);
  testDecoder("Nested list sample 3", "l0:i0elee", ["", 0, []]);
  testDecoder("Nested list sample 4", "l3:onel3:twol5:threeeee", ["one", ["two", ["three"]]]);
  testDecoder("Simple nest list", "llee", [[]]);
  testDecoder("double nest list", "llelee", [[],[]]);
  console.log();
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
  testDecoder("10000", "i10000e", 10E3);
  testDecoder("crazy big number 10e20", "i10e+20e", 10E20);
  testDecoder("10e-12", "i10e-12e", 10e-12);
  testDecoder("floating values", "i3.14e", 3.14);
  console.log();
}

function testDecoding() {
  testIntergerDecoding();
  testStringDecoding();
  testListDecoding();
}

function main() {
  testDecoding();
}

main();
