export function testFn(phrase) {
  // Déclarez en dessous :
  let reponse = phrase.trim().split(" ").length

  // Ne touchez pas au return :
  return reponse;
}

console.log(testFn("Un petit chat"));
console.log(testFn("  Une phrase avec des espaces au début"));