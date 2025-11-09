/* array.concat(<value>)
   ---------------------
  This function concatinates any element/value you provide 
  to the end of the array`
  And increments the highest index value 

  The provided implementation may be inaccurate for certain
  inputs and are only meant to a simple visualization
*/

const array = [1,2,3,4,5]

const findLastIndex = arr => arr.length - 1; //finds the last index of the array

function concat(array, newElement) {
  const newArray = array.slice();    //makes a copy of the array
  const lastIndex = findLastIndex(newArray)
  newArray[lastIndex + 1] = newElement;
  return newArray
}

console.log("Self implemented function");
console.log("Array before concantenating =", array);
console.log("Array after concantenating 6 =", concat(array, 6));

console.log("\nBuilt-in function");
console.log("Array before concantenating =", array);
console.log("Array after concantenating 6 =", array.concat(6));
