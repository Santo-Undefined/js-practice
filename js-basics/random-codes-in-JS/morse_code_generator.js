/*  Simple morse code generator
    Run the code and see the morse code of the given data
    Morse code mainly supports uppercase
    And letters will be separated by spaceses and word will be seperated by a /

    Currently support only for alphabets
 */

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
const MORSE_CHARACTERS = [
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
  "/"      // SPACE 
];

function getMorseCharacter(char) {
  const index = CHARACTERS.indexOf(char);
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
