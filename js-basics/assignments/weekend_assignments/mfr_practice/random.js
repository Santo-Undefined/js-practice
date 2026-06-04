const occurence = (frequency, element) => {
  if (!frequency.some((ele) => element === ele[0])) {
    frequency.push([element, 1]);
    return frequency;
  }

  const index = frequency.reduce((acc, ele, i) => {
    return ele[0] === element ? i : acc;
  }, 0);

  frequency[index][1] += 1;
  return frequency;
};

[1, 2, 3, 1, 2, 4, 2, 3].reduce(occurence, []);
