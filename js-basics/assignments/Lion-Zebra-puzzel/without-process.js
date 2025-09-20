const savanna = "L     Z"

let animalDiversity = -1 ;
let animaldistance = savanna.length;

for (let savannaPosition = savanna.length - 1; savannaPosition >= 0; savannaPosition-- ){

  if ( ((savanna[savannaPosition] === "L") || (savanna[savannaPosition] === "Z")) ) {

    let animal1 = (savanna[savannaPosition] === "L")? "L" : "Z"
    for(let savannaPositionInside = (savanna.length - 1); savannaPositionInside >=0 ; savannaPositionInside--){
      
      if ((savanna[savannaPositionInside] === "L") || (savanna[savannaPositionInside] === "Z")){
        
        if (animal1 !== savanna[savannaPositionInside]){
          
          let animalDiversityinside = savannaPosition - savannaPositionInside;
          animalDiversityinside = (animalDiversityinside<0) ? (animalDiversityinside * -1) : animalDiversityinside;
          animaldistance = (animalDiversityinside<animaldistance) ? animalDiversityinside : animaldistance;
          // console.log( "Animal distance" , animaldistance);

        }
      }
    }
  }
}
// animaldistance = animaldistance - 1
animaldistance = (animaldistance === savanna.length)? -1 : animaldistance - 1;
console.log( "Final distance" , animaldistance);

// console.log("Animal Diversity ", animalDiversity);
