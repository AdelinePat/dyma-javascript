import "./style.css";

// ############# LOCALSTORAGE ########
// localStorage.setItem("theme", "dark");
// localStorage.setItem("img", "a picture");
console.log(localStorage.getItem("theme"));
console.log(localStorage.key(0));

for (let key in localStorage) {
  if (localStorage.hasOwnProperty(key)) {
    console.log(key, " : ", localStorage.getItem(key));
  }
}
