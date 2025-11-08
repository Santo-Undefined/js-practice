const testcase1 = "LZ";
const testcase2 = "Z L";
const testcase3 = "L     Z";
const testcase4 = "L     L";
const testcase5 = "Z   Z   Z";
const testcase6 = "L  ZL Z";
const testcase7 = "  LL  Z  Z";

const savanna = testcase7; //working condition

let animalDiversity = -1;
let animaldistance = savanna.length;

// 
for (let savannaPosition = savanna.length - 1; savannaPosition >= 0; savannaPosition--) {

  // checking if it is a animal or not
  if (((savanna[savannaPosition] === "L") || (savanna[savannaPosition] === "Z"))) {

    const animal1 = (savanna[savannaPosition] === "L") ? "L" : "Z"; // finding which animal

    // Finding the animals nearby and calculating the distance
    for (let savannaPositionInside = (savanna.length - 1); savannaPositionInside >= 0; savannaPositionInside--) {

      if ((savanna[savannaPositionInside] === "L") || (savanna[savannaPositionInside] === "Z")) {

        // Checking if it is the opposite animal
        if (animal1 !== savanna[savannaPositionInside]) {

          let animalDiversityinside = savannaPosition - savannaPositionInside;  // calculating the distance
          animalDiversityinside = (animalDiversityinside < 0) ? (animalDiversityinside * -1) : animalDiversityinside; // finding the shortest distance between the animals

          animaldistance = (animalDiversityinside < animaldistance) ? animalDiversityinside : animaldistance;

        }
      }
    }
  }
}

animaldistance = (animaldistance === savanna.length) ? -1 : animaldistance - 1;
console.log("Final distance", animaldistance);



