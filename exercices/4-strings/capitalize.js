export function testFn(chaine) {
  // Déclarez en dessous :
  let newString = "";
  for (let i = 0; i < chaine.length; i++) {
    if (i === 0) {
      newString += chaine[i].toUpperCase();
    } else {
      newString += chaine[i].toLowerCase();
    }
  }
  chaine = newString;

  // Ne touchez pas au return :
  return chaine;
}

console.log(testFn("blabla"));
console.log(testFn("chat"));
console.log(testFn("TEST"));
console.log(testFn("HeLLo"));
