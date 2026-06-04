const inputArr = [1, 2, 3, 4, 5, 6, 7];
// const outputExpected = [2,4,6];

const isEven = (x) => x % 2 === 0;

const filter1 = (perdicate, array) => {
  const resultArray = [];
  array.forEach((element) => {
    if (perdicate(element)) {
      resultArray.push(element);
    }
  });
  return resultArray;
};

const filter = (perdicate, array) => {
  return array.reduce((result, element) => {
    if (perdicate(element)) {
      result.push(element);
    }
    return result;
  }, []);
};

console.log("filter using forEach", filter1(isEven, inputArr));
console.log("filter using reduce", filter(isEven, inputArr));