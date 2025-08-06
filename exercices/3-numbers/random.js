export function testFn() {
  // Déclarez en dessous :
  const aleatoire = Math.floor(Math.random() * 11);
  // Ne touchez pas au return :
  return aleatoire;
}

for (let i = 0; i < 1000; i++) {
  console.log(testFn());
}
