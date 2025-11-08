// .length returns the length of the given array
// Inside the compiler the working is very different, this is a very
// simplified repersentation and not accurate
// 
// Actual the .length is returning +1 to the highest index

const array = [1,2,3,4,5]

function length(array) {
  let index = 0;
  while (array[index] !== undefined){
    index++;
  }
  return index
}

console.log("Self implemented function output", length(array));
console.log("Built-in function output", array.length);