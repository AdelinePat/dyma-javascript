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


console.log("###################\n", typeof myvar, "\n###################")

const c = 1 + " hello"
console.log(typeof c, c);
// console.log(Number(true));
// console.log('2' && '3');
console.log(1 && 2);
console.log(Boolean(42));

const user = {
    name : ''
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
    console.log('Tu peux boire de l’alcool aux Etats-Unis.');
  case 18:
    console.log('Tu peux boire de l’alcool en France.');
  case 16:
    console.log('Tu peux boire de l’alcool à Cuba.');
  case 14:
    console.log('Tu peux boire de la bière en Allemagne.');
    break;
  default:
    console.log('Rien pour toi cette année.');
}

for (let i = 0, j = 1; i < 3 && j < 4; i++, j++) {
  console.log(i, j);
}

console.log(parseInt("AF12", 16));

console.log('\uD83D\uDE00'); 

const numeroCarte = '4678628353263149';
console.log(numeroCarte.length);
const quatreDerniersChiffres = numeroCarte.slice(-4);
const numeroObfusque = quatreDerniersChiffres.padStart(numeroCarte.length, '*');
const bidule = "".padStart(numeroCarte.length, 'au secours jen ai ras le bol aled');
console.log(numeroObfusque.length);
console.log(bidule.length);
console.log(numeroObfusque); 
console.log(bidule); 


const string = "je suis le soleil";
const evaluate = /su.s/.test(string);
console.log(evaluate);
console.log(Object());