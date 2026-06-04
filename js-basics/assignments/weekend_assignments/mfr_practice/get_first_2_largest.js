const numberList = [1, 4, 2, 7, 5, 0, 4, 3];

const getLargest2 = (result, number) => {
  if (number > result[0]) return [number, result[0]];
  if (number > result[1]) return [result[0], number];
  return result;
};

const getLargest2another = (result, number) => {
  if (number > result[1]) {
    if (number > result[0]) {
      result[1] = result[0];
      result[0] = number;
      return result;
    }
    result[1] = number;
    return result;
  }
  return result;
};

console.log(
  "Method One",
  numberList.reduce(getLargest2, [-Infinity, -Infinity]),
);
console.log(
  "Method Two",
  numberList.reduce(getLargest2another, [-Infinity, -Infinity]),
);
