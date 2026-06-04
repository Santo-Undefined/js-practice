const candidateArray = [1, [1, 2], 3, [4, [[5]]]];

const flatAllLevel = (array, flattened = []) => {
  array.forEach((element) => {
    if (Array.isArray(element)) {
      return flatAllLevel(element, flattened);
    }
    flattened.push(element);
  });
  return flattened;
};

const flat1 = (array, depth = 1, flattened = []) => {
  if (depth < 0) {
    return flattened.push(array);
  }

  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      flat1(array[index], depth - 1, flattened);
    } else {
      flattened.push(array[index]);
    }
  }
  return flattened;
};

const flat2 = (array, depth = 1, flattened = []) => {
  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index]) && depth > 0) {
      flat1(array[index], depth - 1, flattened);
    } else {
      flattened.push(array[index]);
    }
  }
  return flattened;
};

console.log("flat infinity levels", flatAllLevel(candidateArray));
console.log("flat 1", flat1(candidateArray));
console.log("flat 2", flat2(candidateArray));