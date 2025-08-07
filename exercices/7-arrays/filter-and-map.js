export function filtreFemmesEtAjouteNomComplet(arrayToSort) {
  const newArr = arrayToSort
    .filter((value) => value.genre === "féminin")
    .map((value) => {
      return { ...value, nomComplet: value.prenom + " " + value.nom };
    });
  return newArr;
}

console.log(
  filtreFemmesEtAjouteNomComplet([
    { prenom: "Albert", nom: "Einstein", genre: "masculin" },
    { prenom: "Isaac", nom: "Newton", genre: "masculin" },
    { prenom: "Marie", nom: "Curie", genre: "féminin" },
    { prenom: "Max", nom: "Planck", genre: "masculin" },
    { prenom: "Simone", nom: "de Beauvoir", genre: "féminin" },
    { prenom: "Rosalind", nom: "Franklin", genre: "féminin" },
  ])
);
