export function testFn(fichier) {
  // Déclarez en dessous :
  const regExp = /\.(.{1,})$/;
  let reponse = fichier.match(regExp);
  if (reponse) {
    reponse = reponse[1];
  } else {
    reponse = fichier;
  }

  // Ne touchez pas au return :
  return reponse;
}

console.log(testFn("MON-fichier123.png"));
console.log(testFn("MON-fichier123.doc"));
console.log(testFn("fichier.jpeg"));
