/* array.length
   ------------
  This function returns the length of the provided array
  
  array.length returns the highest index + 1 (since index starts from 0)
  The highest index value of array will be stored internally

  The provided implementation may be inaccurate for certain
  inputs and are only meant to a simple visualization

  Note: .length does not count indexes as shown below 
*/

const array = [1,2,3,4,5]

function length(array) {
  let index = 0;
  while (array[index] !== undefined){
    index++;
  }
  return index
}

console.log("Self implemented function");
console.log("Array =", array);
console.log("Array length =", length(array));

console.log("\nBuilt-in function");
console.log("Array =", array);
console.log("Array length =", array.length);
