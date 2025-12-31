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
/// EDIT ARRAY ///

const arr = ["UN", "DEUX", "TROIS"];
const a = arr.map((value) => value.toLowerCase());
console.log(a);
console.log(arr === a);
console.log(typeof arr, typeof a);

const array = [
  {
    quantity: 5,
    name: "SHOES",
  },
  {
    quantity: 10,
    name: "SHIRTS",
  },
  {
    quantity: 12,
    name: "PANTS",
  },
];

const b = array
  .filter((value) => value.quantity >= 10)
  .map((el) => ({
    ...el,
    name: el.name.toLowerCase(),
  }));

// filter callback to filter only what we want, then map on the result get the object with spread operator and rename (overwrite) the value of the key

console.log("b : ", b);
console.log("///////////");
//// REDUCE METHOD ON ARRAY ////
const cart = [
  {
    quantity: 2,
    name: "SHOES",
    price: 50,
  },
  {
    quantity: 1,
    name: "SHIRTS",
    price: 20,
  },
  {
    quantity: 2,
    name: "PANTS",
    price: 70,
  },
];

let accumulatorInitValue = 0;
const total = cart.reduce((accumulator, element, index) => {
  return (accumulator += element.price * element.quantity);
}, accumulatorInitValue);

console.log(total);

/////////// MANIPULATE DOM ////////////

const maDiv = document.getElementById("ma-div");
console.log(maDiv.outerHTML);
const img = document.querySelector("img");
console.log(img);
img.src =
  "https://images.unsplash.com/photo-1755177510462-bf74c129428f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const test = document.querySelector(".test");
test.innerHTML = `${test.innerHTML} \n bye bye!`;
console.log(test.innerHTML);

document.body.maSuperPropriete = { a: 42, c: 22 };

document.body.maMethode = function () {
  console.log(`Bonjour ! Je suis un ${this.tagName}`);
};

const input = document.querySelector("input");
console.log(input);
input.setAttribute("value", "hello");
console.log(input.value);
input.setAttribute("data-lang", "fr");
console.log(input.dataset.lang);
input.select("hello");

const section = document.querySelector("section");
const img = document.querySelector("img");
const container = document.querySelector(".container");
console.log(section.style);
section.style.width = "300px";
img.style.width = section.style.width;
// container.style.backgroundColor = "red";

console.log(section.style);
console.log(window.getComputedStyle(section));

section.classList.add("grey", "text-primary");

console.log(section.className);
console.log(section.classList);

const app = document.querySelector("#app");
// app.classList.add("grey");
// app.innerHTML = `<section>
//       <img
//         class="img"
//         height="400px"
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
//       />
//       <p class="text-primary">
//         Je suis un paragraphe
//         <a href="https://dyma.fr">Dyma</a>
//       </p>
//       <input type="text" name="" id="" />
//     </section>
// `;
const section = document.createElement("section");

const img = document.createElement("img");
const imgSrc = document.createAttribute("src");
imgSrc.value =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";
img.setAttributeNode(imgSrc);

const p = document.createElement("p");
const pClass = document.createAttribute("class");
pClass.value = "text-primary";
const pText = document.createTextNode("hello world ! Je suis un paragraphe");
p.setAttributeNode(pClass);

const aLink = document.createElement("a");
aLink.setAttribute("href", "https://dyma.fr");
// const aHref = document.createAttribute("href");
// aHref.value = "https://dyma.fr";
const aText = document.createTextNode("Dyma");

const comment = document.createComment("je suis un commentaire");

console.log(app);
app.appendChild(section);
section.append(img, p);
p.append(pText, aLink);
aLink.appendChild(aText);
p.insertBefore(comment, aLink);
section.insertAdjacentElement("afterend", p);

const aLink1 = document.createElement("a");
aLink.setAttribute("href", "https://dyma.fr");
// const aHref = document.createAttribute("href");
// aHref.value = "https://dyma.fr";
const aText1 = document.createTextNode("Dyma");

const comment1 = document.createComment("je suis un commentaire");

console.log(app);
// app.appendChild(section);
// section.append(p);
// p.append(pText, aLink);
// aLink.appendChild(aText);
// p.insertBefore(comment, aLink);

const square = document.querySelector("div");
console.log(window);
square.onmouseover = () => {
  console.log("mouseover !!");
  //   square.classList.toggle("red");
  square.style.backgroundColor = "red";
};

square.onmouseout = () => {
  square.style.backgroundColor = "#eee";
};

const btn = document.querySelector("button");

body.addEventListener("click", () => {
  if (event.target.closest("button"))
    square.dispatchEvent(new Event("mouseover"));
});

//// TIMEOUT AND CLEARTIMEOUT

const test = document.createElement("h2");
test.setAttribute("class", "red");
const testText = document.createTextNode("BOUYA !!!!");
test.append(testText);

const bouya = setTimeout(() => {
  app.before(test);
}, 2000);

const noMoreBouya = setTimeout(() => {
  test.remove();
}, 6000);

body.addEventListener("dblclick", (event) => {
  if (event.target.closest("button")) {
    console.log("dbl click");
    if (noMoreBouya) {
      clearTimeout(noMoreBouya);
    }
  }
});

///// PROMISE
const aPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("bouya");
  }, 2000);
  reject("no bouya");
  // if (index % 2 === 0) resolve("bouya");
  // else reject("no bouya");
});

//// PROMISE AND PREVIOUS CHAPTER
import { a, b, hello } from "./test.js";
const body = document.querySelector("body");
const app1 = document.querySelector("#app");
const section = document.createElement("section");

const pezfzef = document.createElement("p");
const pClass = document.createAttribute("class");
pClass.value = "text-primary";
const pTextezfzef = document.createTextNode(
  "hello world ! Je suis un paragraphe"
);
p.setAttributeNode(pClass);

const secondPromise = new Promise((resolve, reject) =>
  setTimeout(() => resolve(22), 3000)
)
  .then((r) => r * 2)
  .then((r) => r + 4);

const result = await secondPromise.then((res) => res);
const result2 = await secondPromise.then((r) => r * 2).then((r) => r);
const result3 = await secondPromise.then((r) => r / 2).then((r) => r);
console.log(result, result2, result3);

async function func() {
  return "bouya";
}

console.log(func());

func().then((r) => console.log(r));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 1000);
});

const awaitArrow = async (text) => {
  const something = await p1;
  console.log(text, something);
};
awaitArrow("HAAAAAAAAAAAAAAAAAAAAAAA");

async function func() {
  const value = await p1;
  console.log(value);
  return value;
}

func()
  .then((r) => console.log("haaa", r))
  .catch((err) => console.log(err));

console.log("order?");

// ############## FETCH REQUES #################

console.log("start!");

setTimeout(() => console.log("2000"), 2000);

const promise = new Promise((resolve, reject) =>
  setTimeout(() => resolve("4000"), 4000)
);

promise.then((result) => console.log("promesse :", result));

Promise.resolve().then(() => console.log("promesse 0"));

setTimeout(() => console.log("timeout 0"));

console.log("fin");

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");

console.log("fetchPromise: ", fetchPromise);

// Method 1
fetchPromise
  .then((response) => {
    console.log("fetchPromise response: ", response);
    // const usersPromise = response.json();
    const usersPromise = response.text();

    const users = usersPromise
      .then((result) => {
        console.log(JSON.parse(result));
      })
      .catch((err) => err);
  })
  .catch((err) => err);

// Method 2
const fetchPromise2 = fetch("https://jsonplaceholder.typicode.com/users");
fetchPromise2.then(async (response) => {
  try {
    const users = await response.json();
    console.log("avec async", users);
  } catch (err) {
    console.log(err);
  }
});

// Lesson example
const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
console.log(reponse.ok);
console.log(reponse.status);
console.log(reponse.statusText);
console.log(reponse.redirected);
console.log(reponse.type);
console.log(reponse.url);
for (const [cle, valeur] of reponse.headers) {
  console.log(`headers value: ${cle} : ${valeur}`);
}

const user = {
  name: "Irahan Shuxi",
  email: "irahan@gmail.com",
  username: "irahan",
  adress: {},
  company: {},
  phone: "",
  website: "",
};

console.log("user:", user);

const request = fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify(user),
  headers: {
    "Content-Type": "application/json",
  },
});

console.log("stringify", JSON.stringify(user));

request.then(async (response) => {
  try {
    console.log("resquest then", response);
    const body = await response.json();
    console.log(body);
  } catch (e) {
    console.log(e);
  }
});

// ############# STOP FETCH REQUEST WITH ABORTCONTROLLER ########
const controller = new AbortController();
console.log(controller);

controller.signal.addEventListener("abort", (event) => {
  console.log(event);
});

controller.abort();

const promise = fetch("https://jsonplaceholder.typicode.com/users", {
  signal: controller.signal,
});

const result = promise
  .then(async (response) => {
    try {
      const users = await response.json();
      console.log("response: ", response);
      console.log("response: ", users);
    } catch (e) {
      console.log("try catch:", e);
    }
  })
  .catch((err) => {
    console.log("err: ", err);
  });

// ############# XMLHTTPREQUEST OBJECT ########

const xhr = new XMLHttpRequest();
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  xhr.open("POST", "https://restapi.fr/upload");

  xhr.withCredentials = true;

  xhr.upload.addEventListener("loadstart", (event) => {
    console.log("load started");
  });

  xhr.upload.addEventListener("progress", (event) => {
    // console.log(event);
    const percentage = ((event.loaded / event.total) * 100).toFixed(0);
    console.log(`${percentage}%`);
  });

  xhr.upload.addEventListener("loadend", (event) => {
    console.log("load ended");
  });

  xhr.upload.addEventListener("error", (event) => {
    console.log("upload error");
  });

  xhr.send(formData);
});
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("submit cliqué!");

//   const formData = new FormData(form);
//   console.log(formData);

//   formData.append("name", "123");
//   formData.set("email", "tintin@gmail.com");
//   console.log(formData.get("email"));

//   for (let pair of formData) {
//     console.log(pair);
//   }
// });

const todo = {
  userId: 10,
  title: "salut",
  completed: false,
};

// const xhr = new XMLHttpRequest();

// xhr.open("POST", "https://jsonplaceholder.typicode.com/todos");
// xhr.open("POST", "https://restapi.fr/upload");

// xhr.timeout = 100;

// xhr.responseType = "json";

// xhr.setRequestHeader("Content-type", "application/json");

// xhr.send(JSON.stringify(todo));

// xhr.addEventListener("abort", event => {
//   console.log(event);
// })

// xhr.abort();

// xhr.addEventListener("timeout", (event) => {
//   console.log(event);
// });

// xhr.send();


// ############# Date ########


const today = new Date();
console.log(today);

const date = new Date(1000 * 3600 * 24);
const date2 = new Date(0);
const date3 = new Date(5 * 365 * 1000 * 3600 * 24);
// console.log(date);
// console.log(date2);
// console.log(date3);

const date4 = new Date(2020, 0, 7, 10, 50, 27, 365);
// console.log(date4);

console.log("\nTest format ISO\n", today.toISOString());

const anotherToday = new Date("2025-10-27T18:04:32.846Z");
console.log(anotherToday);

const dateFromStr = Date.parse("2025-10-27T18:04:32.846Z");

console.log("\nTest Date.parse\n", dateFromStr);

const now = Date.now();

console.log((now - anotherToday) / 1000 / 60 / 60);

// setInterval(() => {
//   console.log(new Date().toLocaleTimeString("fr-FR"));
// }, 1000);

const date = new Date();
console.log(
  date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
);
console.log(
  date.toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "numeric",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
);


// ############# Location & history ########
console.log(location);
console.log(document.location);

const url = new URL(location.href);
console.log(url);

const searchparam = new URLSearchParams(location.search);
console.log(searchparam.get("sort"));

// redirect
// setTimeout(() => {
//   location.href = "https://dyma.fr";
// }, 3000);

console.log(history);

const backNext = document.querySelector(".back-next");
const back = document.querySelector("#back");
const next = document.querySelector("#next");

backNext.addEventListener("click", (event) => {
  const target = event.target;
  if (target === back) {
    console.log("back");
    history.back();
  }
  if (target === next) {
    console.log("next");
    history.forward();
  }
});

// ############# OBJECT IN JS ########
const user = {
  firstname: "tintin",
  lastname: "milou",
  // SECOND ATTEMPT
  //   get fullname() {
  //     return `${this.firstname} ${this.lastname}`;
  //   },
  //   set fullname(value) {
  //     [this.firstname, this.lastname] = value.split(" ");
  //   },
  // FIRST ATTEMPT
  //   fullname: function () {
  //     return `${this.firstname} ${this.lastname}`;
  //   },
};

// Object.defineProperty(user, "fullname", {
//   writable: false,
// });

user.firstname = "jeanne";
user.lastname = "au secours";
console.log(user.fullname);

user.fullname = "Yuji Itadori";
Object.defineProperty(user, "fullname", {
  // THIRD ATTEMPT
  get: function () {
    return `${this.firstname} ${this.lastname}`;
  },
  set(value) {
    [this.firstname, this.lastname] = value.split(" ");
  },
});
const descriptor = Object.getOwnPropertyDescriptor(user, "fullname");

console.log(user.fullname);
user.fullname = "Yuji Itadori";
console.log(descriptor);

console.log(user.fullname);

// ############# OOP & CONSTRUCTOR ########
function Person(name) {
  // this = {} // js interpreter does that under the hood.
  // Take the global object (this) and reassign it to an empty object {} and we can do whatever we want with it
  this.name = name;
  this.eyes = 2;
  this.alive = true;
  this.wakeUp = () => {
    console.log("get out of bed against their will");
  };

  //return this // js interpreter return the object at the end
  // Could have write it :
  //   return {
  //     name: name,
  //     eyes: 2,
  //     alive: true,
  //   };
}

const paul = new Person("Paul");
const pierre = new Person("Pierre");
pierre.wakeUp();

console.log(paul, pierre);

// const date = new Date(2025, 6, 23);
// console.log("date", date.toISOString());

function Person2(name) {
  this.name = name;
}

Person2.prototype.eyes = 2;
Person2.prototype.alive = true;
Person2.prototype.wakeUp = () => {
  console.log("aled");
};

const jaques = new Person2("Jacques");
const one = new Person2("1");
const two = new Person2("2");
const three = new Person2("3");

one.eyes = 1;
two.alive = false;

console.log(jaques, one, two, three);

// ############# __PROTO__ & PROTOTYPE ########
const foo = {};
const bar = {
  allo: "hallo?",
};

foo.__proto__ = bar;

const date = new Date();

console.log(foo.__proto__.constructor === date.__proto__.__proto__.constructor);

console.log(foo.__proto__ === Object.prototype);
console.log(Object.__proto__.__proto__);
console.log(Function.__proto__.__proto__);

console.log(foo?.allo);

// ############# __PROTO__ & PROTOTYPE ########
const foo = {};
const bar = {
  allo: "hallo?",
};

foo.__proto__ = bar;

const date = new Date();

console.log(foo.__proto__.constructor === date.__proto__.__proto__.constructor);

console.log(foo.__proto__ === Object.prototype);
console.log(Object.__proto__.__proto__);
console.log(Function.__proto__.__proto__);

console.log(foo);
console.log(foo.__proto__.__proto__ === bar.__proto__); // TRUE !

const foo2 = Object.create(bar);
console.log(foo2);
console.log(foo.__proto__ === foo2.__proto__); // TRUE !

console.log(Object.getPrototypeOf(foo) === foo.__proto__); // TRUE !


// ############# MAP ########
const mymap = new Map();
const user = { name: "Eli" };
const func = () => "Hello";

mymap.set("key", "value");
mymap.set(user, "has paid");
mymap.set(func, "une fonction");
console.log(mymap);
console.log(mymap.get(user));
console.log(mymap.get("key"));
console.log(mymap.get(func));

console.log(mymap.keys());
console.log(mymap.values());
console.log(mymap.entries());

mymap.set("1", "value1").set(1, "value2").set(true, "value3");

for (let key of mymap.keys()) {
  console.log(key);
}

for (let value of mymap.values()) {
  console.log(value);
}
for (let entries of mymap.entries()) {
  console.log(entries);
}
// mymap.delete("key");

// console.log(mymap.size);
// console.log(mymap.has("key"));
// mymap.clear();
// console.log(mymap.size);

// ############# SET ########
const map = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");
map.set(4, "four");

const myset = new Set([1, 2, 3]);

console.log(myset);

let guest = ["Marie", "Pierre", "Marie"];
const setGuest = new Set(guest);

guest = Array.from(setGuest);

console.log(setGuest);
console.log(guest);

// ############# GROUP BY ########

const numbers = [1, 2, 3, 4];

const result = Object.groupBy(numbers, (value) => {
  return value > 2 ? "greaterThanTwo" : "equalOrLesserThanTwo";
});

const { even, odd } = Object.groupBy(numbers, (value) => {
  if (value % 2 == 0) {
    return "even";
  }
  return "odd";
});

console.log(result);
console.log(even, odd);

const users = [
  {
    name: "Jean",
    age: 12,
  },
  {
    name: "Paul",
    age: 15,
  },
  {
    name: "Marie",
    age: 22,
  },
  {
    name: "Pauline",
    age: 17,
  },
];

const { ofAge, underage } = Object.groupBy(users, (user) => {
  if (user.age >= 18) {
    return "ofAge";
  }
  return "underage";
});
console.log(ofAge);
console.log(underage);

const produits = [
  { nom: "Pomme", categorie: "Fruit", prix: 1.2 },
  { nom: "Carotte", categorie: "Légume", prix: 0.8 },
  { nom: "Banane", categorie: "Fruit", prix: 1.5 },
  { nom: "Poulet", categorie: "Viande", prix: 5.0 },
];

const produitsParCategorie = Object.groupBy(produits, (produit) => {
  return produit.categorie;
});

console.log(produitsParCategorie);
const articles = [
  { nom: "Stylo", prix: 2 },
  { nom: "Livre", prix: 15 },
  { nom: "Clavier", prix: 80 },
  { nom: "Écran", prix: 250 },
];

const parBudget = Object.groupBy(articles, (article) => {
  if (article.prix < 10) return "petit budget";
  if (article.prix < 100) return "budget moyen";
  return "budget élevé";
});

console.log(parBudget);

// ############# USING PROTOTYPAL INHERITANCE ########
function Vehicule() {
  this.hasEngine = true;
}

Vehicule.prototype.stop = function () {
  console.log("Engine stop!");
};

function Car() {
  Vehicule.call(this);
  this.wheels = 4;
}

Car.prototype = Object.create(Vehicule.prototype);
Car.prototype.constructor = Car;
Car.prototype.start = function () {
  console.log("Car start !");
};

const car = new Car();

console.log(car);
car.start();

console.log(car.hasEngine);

// ############# USING CLASS SYNTAX ########
class Vehicule2 {
  constructor() {
    this.hasEngine = true;
  }

  stop() {
    console.log("Stop engine2");
  }
}

class Car2 extends Vehicule2 {
  constructor() {
    super();
    this.wheels = 4;
  }

  start() {
    console.log("Car2 start");
  }
}

const car2 = new Car2();
car2.start();
car2.stop();
console.log(car2.hasEngine);
console.log(car2);

// ############# STATIC METHOD ########
function Car() {}

Car.description = function () {
  console.log("Sert a construire une voiture");
};

Car.description();

class Car2 {
  static description() {
    console.log("ceci est une description qui n'existe pas sur une instance");
  }
}

Car2.description();

const car = new Car();
const car2 = new Car2();
car.description();
car2.description();

// ############# PRIVATE ########
class Car {
  #gaz;

  constructor() {
    this.key = false;
    this.#gaz = 80;
  }

  putKey() {
    this.key = true;
  }

  get gaz() {
    return this.#gaz;
  }
  set gaz(value) {
    if (value < 0) {
      console.log("Can't have a negative amount of gaz");
      this.#gaz = 0;
    } else {
      this.#gaz = value;
    }
  }

  start() {
    if (this.key && this.#gaz > 5) {
      this.#startEngine();
    } else {
      console.log("Key's missing or not enough gaz");
    }
  }

  #startEngine() {
    console.log("start engine");
  }
}

const car = new Car();
car.start();
// car.gaz = 0;
car.gaz = -90;
console.log(car.gaz);

const test = [1];
console.log(test instanceof Object);

// ############# COOKIE ########
const location = {
  country: "France",
  city: "Nice",
};

const expiration = new Date(Date.now() + 15 * 1000); // now + 15second
// document.cookie = `test1=salut1; expires=${expiration.toUTCString()}`;

// document.cookie = `location=${JSON.stringify(location)}; max-age=100`;
// document.cookie = "name=Jean";
console.log(document.cookie);

const cookies = extractCookies2();
// document.cookie = "email=jean@gmail.com";
function extractCookies() {
  const cookiesArr = document.cookie.split("; ");
  const finalCookies = {};
  for (let i = 0; i < cookiesArr.length; ++i) {
    console.log(cookiesArr[i]);
    cookiesArr[i] = cookiesArr[i].split("=");
    if (!finalCookies[cookiesArr[i][0]]) {
      finalCookies[cookiesArr[i][0]] = cookiesArr[i][1];
    }
  }
  return finalCookies;
}

function extractCookies2() {
  return document.cookie.split("; ").reduce((accumulator, iteration) => {
    const pair = iteration.split("=");
    if (!accumulator[pair[0]]) {
      accumulator[pair[0]] = pair[1][0] === "{" ? JSON.parse(pair[1]) : pair[1];
    }
    return accumulator;
  }, {});
}

console.log(cookies);