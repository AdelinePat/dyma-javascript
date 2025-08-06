export function testFn(cb) {
  // Déclarez en dessous :
  let reponse = cb.slice(-4).padStart(cb.length, "*");
  // Ne touchez pas au return :
  return reponse;
}
console.log(testFn("30116613634425"));
console.log(testFn("379517272367653"));
console.log(testFn("5223112447929699"));
