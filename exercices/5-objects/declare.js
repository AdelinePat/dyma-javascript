export function testFn() {
  // Déclarez en dessous :
  const personne = {
    prenom: "Jean",
    nom: "Dupont",
    adresse: "0 rue Quelquechose",
    age: 55
  }

  // Ne touchez pas au return :
  return personne;
}

export function testFn(prop, valeur) {
  // Déclarez en dessous :
  const objet = {
    [prop] : valeur
  }

  // Ne touchez pas au return :
  return objet;
}

console.log(testFn('age', 42));