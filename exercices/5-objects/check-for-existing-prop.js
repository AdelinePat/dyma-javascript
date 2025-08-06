export function testFn(objet) {
  // Déclarez en dessous :
  let resultat = false;
  if ("prenom" in objet && "nom" in objet) {
    if (typeof objet.prenom === "string" && typeof objet.nom === "string") {
      resultat = true;
    }
  }

  //   const resultat = ("prenom" in objet && "nom" in objet) && (typeof objet.prenom === "string" && typeof objet.nom === "string");
  // Ne touchez pas au return :
  return resultat;
}