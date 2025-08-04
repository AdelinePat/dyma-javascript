export function testFn(condition, age) {
  // Déclarez en dessous :
  const a = 42;
  const b = condition ? a : 0;
  const statut =
    age >= 21 ? "Majeur aux USA" : age >= 18 ? "Majeur en France" : "Mineur";
  // Ne touchez pas au return.
  return [b, statut];
}

console.log(testFn(true, 22));
console.log(testFn(false, 18));
console.log(testFn(1, 12));
console.log(testFn(0, 19));