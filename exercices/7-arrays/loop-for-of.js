export function theGreatest(...numbers) {
  let number = numbers[0];
  for (const value of numbers) {
    if (number < value) {
      number = value;
    }
  }
  return number;
}

console.log(theGreatest(3, -7, 42, 0, 13, -100, 5)); // 42
console.log(theGreatest(-10, -20, -3, -1)); // -1
console.log(theGreatest(0, 0, 0, 0)); // 0
console.log(theGreatest(7, 7, 7, 7)); // 7
console.log(theGreatest(1, 2, 3, 2, 1)); // 3