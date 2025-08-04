export function testFn(note) {
  // Déclarez en dessous :
  let remarque;
  switch (note) {
    case 0:
    case 1: {
      remarque = "Médiocre";
      break;
    }
    case 2: {
      remarque = "Moyen";
      break;
    }
    case 3: {
      remarque = "Bien";
      break;
    }
    case 4: {
      remarque = "Très bien";
      break;
    }
    case 5: {
      remarque = "Excellent";
      break;
    }
    default: {
      remarque = "La note doit être un nombre compris entre 0 et 5";
    }
  }
  // Ne touchez pas au return.
  return remarque;
}

console.log(testFn(4));
console.log(testFn(2));
console.log(testFn(-99));
console.log(testFn(200));
console.log(testFn(undefined));
