export function testFn(objet1, objet2, objet3) {
  // Déclarez en dessous :
  const objet = { ...objet1, ...objet2, ...objet3 };
  //   const objet = Object.assign({}, objet1, objet2, objet3);
  // Ne touchez pas au return :
  return objet;
}

console.log(testFn({ a: -2 }, { a: 2 }, { b: 42 }));
console.log(testFn({ a: 1 }, { b: 2 }, { c: 3 }));
