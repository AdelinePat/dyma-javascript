export function testFn(personne) {
  // Déclarez en dessous :
    const { familly : {
        father : {
            firstname: prenom,
            lastname: nom
        }
    } } = personne;

  // Ne touchez pas au return :
  return { prenom, nom };
}