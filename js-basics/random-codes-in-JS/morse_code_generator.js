/*  Simple morse code generator
    Run the code and see the morse code of the given data
    Morse code mainly supports uppercase
    And letters will be separated by spaceses and words will be seperated by a /

 */

const CHARACTERS = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,?'!/()&:=+-"@ `;
const MORSE_CHARACTERS = [
  // Letters A–Z
  ".-",    // A
  "-...",  // B
  "-.-.",  // C
  "-..",   // D
  ".",     // E
  "..-.",  // F
  "--.",   // G
  "....",  // H
  "..",    // I
  ".---",  // J
  "-.-",   // K
  ".-..",  // L
  "--",    // M
  "-.",    // N
  "---",   // O
  ".--.",  // P
  "--.-",  // Q
  ".-.",   // R
  "...",   // S
  "-",     // T
  "..-",   // U
  "...-",  // V
  ".--",   // W
  "-..-",  // X
  "-.--",  // Y
  "--..",  // Z

  // Numbers 0–9
  "-----", // 0
  ".----", // 1
  "..---", // 2
  "...--", // 3
  "....-", // 4
  ".....", // 5
  "-....", // 6
  "--...", // 7
  "---..", // 8
  "----.", // 9

  // Punctuation & symbols
  ".-.-.-",  // .
  "--..--",  // ,
  "..--..",  // ?
  ".----.",  // '
  "-.-.--",  // !
  "-..-.",   // /
  "-.--.",   // (
  "-.--.-",  // )
  ".-...",   // &
  "---...",  // :
  "-...-",   // =
  ".-.-.",   // +
  "-....-",  // -
  ".-..-.",  // "
  ".--.-.",  // @
  "/",       // SPACE
];

function getMorseCharacter(char) {
  const index = CHARACTERS.indexOf(char);
  if (index === -1) {
    return "Invalid";
  }
  return MORSE_CHARACTERS[index];
}

function generateMorseCode(data) {
  const string = data.toUpperCase();
  const morseCode = [];
 
  for (let index = 0; index < string.length; index++) {
    morseCode.push(getMorseCharacter(string[index]));
  }
  return morseCode.join(" ");
}

function main() {
  const data = prompt("Enter information : \n");
  console.log(generateMorseCode(data));
}

main();
