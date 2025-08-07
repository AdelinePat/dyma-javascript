export function obtenirMoyenne(arr) {
  const newArr = arr.map((value) => {
    return (
      Math.round(
        (value.reduce((acc, iteration) => {
          return (acc += iteration);
        }, 0) /
          value.length) *
          10
      ) / 10
    );
  });
  return newArr;
}

console.log(
  obtenirMoyenne([
    [12, 14, 16, 10, 5],
    [7, 2, 4],
  ])
);
