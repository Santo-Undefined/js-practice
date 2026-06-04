const inputArr = [2, 4, 6, 8];

const halfIt = (x) => x / 2;

const mapUsingFor = (perdicate, array) => {
  const mappedArr = [];
  array.forEach((element) => {
    mappedArr.push(perdicate(element));
  });
  return mappedArr;
};

const mapUsingReduce = (perdicate, array) => {
  return array
    .reduce((mappedArr, element) => {
      mappedArr.push(perdicate(element));
      return mappedArr;
    }, []);
};

console.log("filter using forEach", mapUsingFor(halfIt, inputArr));
console.log("filter using forEach", mapUsingReduce(halfIt, inputArr));