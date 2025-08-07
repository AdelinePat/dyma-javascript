export function compterElements(arrayToReduce) {
  const newArr = arrayToReduce.reduce((accumulator, currentIteration) => {
    if (currentIteration in accumulator) {
      accumulator[currentIteration] += 1;
    } else {
      accumulator[currentIteration] = 1;
    }
    return accumulator;
  }, {});
  return newArr;
}

export function compterElements(arrayToReduce) {
  const newArr = arrayToReduce.reduce((accumulator, currentIteration) => {
    currentIteration in accumulator
      ? (accumulator[currentIteration] += 1)
      : (accumulator[currentIteration] = 1);
    return accumulator;
  }, {});
  return newArr;
}


console.log(
  compterElements([
    "veste",
    "clé",
    "verre",
    "chien",
    "biberon",
    "chien",
    "veste",
    "clé",
    "chien",
  ])
);
