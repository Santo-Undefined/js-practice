const recordedTemps = [10, 20, 30, 40, 10, 20];
const randomString = ["hi", "hello", "hi"];

const occerances = (frequencyList, element) => {
  const checkingElement = frequencyList.find((x) => x[0] === element);

  if (!checkingElement) {
    frequencyList.push([element, 1]);
    return frequencyList;
  }

  checkingElement[1] += 1;
  return frequencyList;
};

console.log(recordedTemps.reduce(occerances, []));
console.log(randomString.reduce(occerances, []));
