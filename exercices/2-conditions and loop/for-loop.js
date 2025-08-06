export function testFn(nombre) {
  // Déclarez en dessous :
  let texte = "";
  if (typeof nombre === "number" && !Number.isNaN(nombre)) {
    for (let i = nombre; i <= nombre + 4; i++) {
      if (i === nombre + 2) {
        continue;
      }
      texte += i;
    }
  } else {
    texte = "Pas un nombre";
  }
  return texte;
}

console.log(testFn(1));
console.log(testFn(50));
console.log(testFn(-5));
console.log(testFn(undefined));
console.log(testFn("Dupont"));
