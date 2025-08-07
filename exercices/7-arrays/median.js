//// arr.toSorted( code here ) === arr.slice().sort( code here )
export function obtenirMediane(arr) {
  const newArr = arr
    .map((value) => {
      return value.slice().sort((value1, value2) => {
        return value1 - value2;
      });
    })
    .map((value) => {
      const middle = Math.floor(value.length / 2);
      if (value.length % 2 !== 0) {
        return value[middle];
      } else {
        return (value[middle - 1] + value[middle]) / 2;
      }
    });

  return newArr;
}


console.log(
  obtenirMediane([
    [2, 14, 16, 15, 5],
    [7, 2, 4],
  ])
);
console.log(
  obtenirMediane([
    [12, 14, 12, 13],
    [2, 14, 1, 5],
  ])
);

// 5 10 12 14 16
//  2 4 7