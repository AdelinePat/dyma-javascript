export function trierTableaux(arrayToSort) {
  const newArr = arrayToSort.toSorted((el1, el2) => {
    if (el1.prix === el2.prix) {
      return  el2.quantite - el1.quantite;
    }
    return el2.prix - el1.prix ;
  });
  return newArr;
}

console.log(
  trierTableaux([
    { prix: 20, quantite: 10 },
    { prix: 20, quantite: 2 },
    { prix: 50, quantite: 1 },
  ])
);

console.log(
  trierTableaux([
    { nom: "stylo", quantite: 2, prix: 1.5 },
    { nom: "crayon", quantite: 1, prix: 1.2 },
    { nom: "feutre", quantite: 2, prix: 1.0 },
  ])
);

console.log(
  trierTableaux([
    { nom: "stylo", quantite: 2, prix: 1.5 },
    { nom: "crayon", quantite: 1, prix: 1.2 },
    { nom: "feutre", quantite: 2, prix: 1.0 },
  ])
);
