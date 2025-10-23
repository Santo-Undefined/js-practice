/*  Simple morse code generator
    Run the code and see the morse code of the given data
    Morse code mainly supports uppercase
    And letters will be separated by spaceses and word will be seperated by a /

    Currently support only for alphabets
 */

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function generateMorseCode(data) {
  const string = data.toUpperCase();
  return string;
}

function main() {
  const data = prompt("Enter information : \n");
  console.log(generateMorseCode(data));
}

main();
