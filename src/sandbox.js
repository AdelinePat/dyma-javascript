const word = "Hi there";
let a = (2 + 1) * 9;
console.log(word, a);
const b = 26;
console.warn("123");
console.assert(a === b, "les deux valeurs ne sont pas égales");
let bool = true;
const none = null;
var myvar;
myvar = 1;
console.info(myvar);

function helloWorld() {
  console.log("Hello World!");
}

console.log("###################\n", typeof myvar, "\n###################");

const c = 1 + " hello";
console.log(typeof c, c);
// console.log(Number(true));
// console.log('2' && '3');
console.log(1 && 2);
console.log(Boolean(42));

const user = {
  name: "",
};

let username = user.name ?? "John Doe";
let aName = user.age || "Unknown";

console.log(username, aName);

const condition = "";
console.log(!!condition);

if (0 == false) {
  console.log("instruction1");
} else {
  console.log("instruction2");
}

const age = 16;

const isMajor = age >= 18 ? "yup" : "nope";
// const isMajor = age >= 18 ;
console.log("isMajor = ", isMajor);

// const age = 18;
switch (age) {
  case 21:
    console.log("Tu peux boire de l’alcool aux Etats-Unis.");
  case 18:
    console.log("Tu peux boire de l’alcool en France.");
  case 16:
    console.log("Tu peux boire de l’alcool à Cuba.");
  case 14:
    console.log("Tu peux boire de la bière en Allemagne.");
    break;
  default:
    console.log("Rien pour toi cette année.");
}

for (let i = 0, j = 1; i < 3 && j < 4; i++, j++) {
  console.log(i, j);
}

console.log(parseInt("AF12", 16));

console.log("\uD83D\uDE00");

const numeroCarte = "4678628353263149";
console.log(numeroCarte.length);
const quatreDerniersChiffres = numeroCarte.slice(-4);
const numeroObfusque = quatreDerniersChiffres.padStart(numeroCarte.length, "*");
const bidule = "".padStart(
  numeroCarte.length,
  "au secours jen ai ras le bol aled"
);
console.log(numeroObfusque.length);
console.log(bidule.length);
console.log(numeroObfusque);
console.log(bidule);

const string = "je suis le soleil";
const evaluate = /su.s/.test(string);
console.log(evaluate);
console.log(Object());

const obj = {
  a: "un",
  b: "deux",
  c: "trois",
};
// let property;
for (const property in obj) {
  console.log(property, ": ", obj[property]);
}

const obj2 = { 42: 1, 12: 2, 1: 4 };
for (const prop in obj2) {
  console.log(`${prop} : ${obj2[prop]}`);
}
// 1
// 12
// 42

const a = {
  name: "Toto",
  foo: {
    bar: "zoo",
  },
};

// shallow copy
// const b = { ...a};
// const b1 = Object.assign({}, a);
// b1.name = 'Tata';

// deep copy
const b = JSON.parse(JSON.stringify(a));
b.foo.bar = 123;
b.name = "Allo";

console.log("Object a : ", a);
console.log("Object b : ", b);
// console.log("Object b1: ", b1);

console.log(a === b);

function func(varName) {
  console.log(`déclaration de fonction : ${varName}`);
}

const fn = function (varName) {
  console.log(`expression de fonction : ${varName}`);
};

func("Coucou");
fn("blabla");

function value(value = "456") {
  value = "123";
  console.log(`value : ${value}`);
}

function reference(value) {
  value.a = "ABC";
  console.log(`value : ${value.a}`);
}

const a = "abc";
const myObject = { a: "abc" };
value(a);
console.log(a);

reference(myObject);
console.log(myObject.a);

function add() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

function add2(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(add(1, 2, 3, 4, 5, 6, 19));
console.log(add2(12, 0, 8, 2, 0.2, 5));

console.log(this); // undefined
console.log(window); // defined in browser

function a() {
  console.log(foo);
}
function b() {
  let foo = 1;
  a();
}

let foo = 2;
b();

const $ = (function () {
  var a = "Paul";
  return a;
})();
console.log($);

///////////////// THIS ///////////////////
import "./test";
function func() {
  console.log(this);
}

// const obj = {
//   a: 1,
//   test() {
//     console.log(this);
//   },
// };

// function func2() {
//   obj.test();
// }

// func(); // undefined

// func2(); // obj = this

console.log(this === window);

// This in function, in object and as an argument

("use strict");

function test() {
  console.log(this === objet);
}

const objet = {
  maMethode: test,
};

objet.maMethode(); // true

function test1(abc) {
  abc();
}

test1(objet.maMethode);

function a() {}

a.foo = "bar";

console.log(a.foo);

///////////////// ARROW FUNCTION ///////////////////
const arrow = (param) => {
  console.log(this, param);
};

arrow("Hola");

const alpha = (b, c) => b + c;
console.log(alpha(1, 2));

const beta = (a, b) => ({
  a,
  b,
  total: a + b,
});

console.log(beta(4, 5));

function fn(a, cb) {
  console.log("a :", a);
  cb("coucou");
}

fn("Je suis a :", (foo) => {
  console.log("cb : ", foo);
});

setTimeout(() => console.log("Terminé"), 1500);

///////////////// CLOSURE ///////////////////
// function powerBy(power) {
//     return function(number) {
//        return number ** power;
//     }
// }

function powerBy(power) {
  return (number) => {
    return number ** power;
  };
}
// console.log(powerBy(2)(3));

// console.log(powerBy(2)(3));
const powerByTwo = powerBy(2);
console.log(powerBy.power);
console.log(powerByTwo(3));

///////////////// ARRAYS ///////////////////
