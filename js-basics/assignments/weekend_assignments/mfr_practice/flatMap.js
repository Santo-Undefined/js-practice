const input = [1, 2, 3];
// const perdicateOutput = [[1, 0.5], [2, 1], [3, 1.5]];
// const flatMapOutput = [1, 0.5, 2, 1, 3, 1.5];

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

const map = (predicate, array) => {
  const resultArr = [];
  array.forEach((x) => resultArr.push(predicate(x)));
  console.log("inside map result", resultArr);
  return resultArr;
};

const flatMap1 = (perdicate, array, depth = 1) => {
  // array.map(perdicate).flat(depth)
  return flat1(map(perdicate, array), depth);
};

// --------------------------------- ^ normal flat implementation ^ ----------

const tempPerdicate = (x) => [x, x / 2];

const flatMap2 = (perdicate, array) => {
  const resultArr = [];

  for (let index = 0; index < array.length; index++) {
    const mapperResult = perdicate(array[index]);
    if (Array.isArray(mapperResult)) {
      mapperResult.forEach((x) => resultArr.push(x));
    } else {
      resultArr.push(mapperResult);
    }
  }
  return resultArr;
};

const flatMap3 = (perdicate, array) => {
  let resultArr = [];

  for (const element of array) {
    const mappedElement = perdicate(element);
    resultArr = resultArr.concat(mappedElement);
  }
  return resultArr;
};

console.log("normal flat", flatMap1(tempPerdicate, input));
console.log("flatMap1", flatMap2(tempPerdicate, input));
console.log("flatMap2", flatMap3(tempPerdicate, input));
