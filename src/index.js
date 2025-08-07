export function obtenirMoyenne(arr) {
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
  obtenirMoyenne([
    [2, 14, 16, 15, 5],
    [7, 2, 4],
  ])
);
console.log(
  obtenirMoyenne([
    [3, 1, 2], // odd → median is 2
    [10, 8, 6, 4], // even → median is (6 + 8) / 2 = 7
    [5], // odd → median is 5
    [100, 90, 80, 70, 60], // odd → median is 80
    [0, -1, 1], // odd → median is 0
    [6, 6, 6, 6], // even → median is 6
    [3, 9, 7, 5, 11, 13], // even → sorted: [3, 5, 7, 9, 11, 13] → median = (7+9)/2 = 8
    [1, 2, 3, 4, 5, 6, 7], // odd → median = 4
    [1, 3, 3, 6, 7, 8, 9, 9, 10, 12, 15], // odd → median = 8
    [4, 5, 6, 1], // even → median = (4+5)/2 = 4.5
    [9, 8, 7, 6, 5, 4], // even → median = (6+7)/2 = 6.5
  ])
);

// 5 10 12 14 16
//  2 4 7
