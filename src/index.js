export function testFn(objet) {
  // Déclarez en dessous :
  const copie = JSON.parse(JSON.stringify(objet));

  // Ne touchez pas au return :
  return copie;
}

const obj1 = { a: 1, b: {
c: 42} };
const obj2 = testFn(obj1);
obj2.b.c = 12;
console.log(obj1, obj2)

