export function testFn(nombre) {
  // Déclarez en dessous :
  if (
    typeof +nombre === "number" &&
    !Number.isNaN(+nombre) &&
    nombre !== null
  ) {
    if (/\.{1}/.test(nombre)) {
      nombre = Math.round(+nombre * 10 ** 3) / 10 ** 3;
    }
    nombre = +nombre;
  } else {
    nombre = "Pas un nombre";
  }
  // Ne touchez pas au return :
  return nombre;
}

export function testFn2(nombre) {
  // Déclarez en dessous :
  let number = +nombre;
  if (typeof number === "number" && !Number.isNaN(number) && nombre !== null) {
    if (!Number.isInteger(number)) {
      number = Math.round(number * 10 ** 3) / 10 ** 3;
    }
    nombre = number;
  } else {
    nombre = "Pas un nombre";
  }
  // Ne touchez pas au return :
  return nombre;
}

console.log(testFn2(5));
console.log(testFn2("5"));
console.log(testFn2(5.555));
console.log(testFn2(3.333333333333));
console.log(testFn2(9.9999999999));
console.log(testFn2(undefined));
console.log(testFn2("null"));
console.log(testFn2(null));
console.log(testFn2("Bob"));
