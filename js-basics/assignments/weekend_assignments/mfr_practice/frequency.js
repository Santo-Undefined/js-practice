//  make frequency using object
const randomString = ["hi", "hello", "hi"];

const getFrequency = (array) => {
  const countedElements = {};

  array.forEach((element) => {
    if (!countedElements[element]) {
      countedElements[element] = 0;
    }
    countedElements[element] += 1;
  });
  return countedElements;
};

console.log(getFrequency(randomString));