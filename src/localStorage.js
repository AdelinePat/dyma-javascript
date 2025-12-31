// Exercice Dyma chapitre 23 leçon 176 les événements storage

const alertBox = document.querySelector(".alert");
const form = document.querySelector("form");
const formElements = form.elements;
const FORM_DATA_KEY = "formData";

// const getFormData = () => {
// };

function getFormData() {
  const data = { [FORM_DATA_KEY]: {} };
  for (const element of formElements) {
    if (element.name && element.name != "password") {
      data[FORM_DATA_KEY][element.name] = element.value;
    }
  }
  console.log(data);
  return data;
}

// const displayAlert = message => {
// };

function displayAlert(message) {
  alertBox.innerText = message;
  alertBox.style.display = "block";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
}

form.onchange = () => {
  const data = getFormData();
  console.log(data);
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(data[FORM_DATA_KEY]));
  displayAlert("Le formulaire a été sauvegardé !");
};

const clearForm = () => {
  localStorage.clear();
  for (const element of formElements) {
    element.value = "";
  }
};

function retrieveFormData() {
  if (localStorage.key(FORM_DATA_KEY)) {
    const savedData = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
    if (savedData) {
      for (const element of formElements) {
        if (element.id === "clear") {
          element.addEventListener("click", clearForm);
        }
        if (element.name in savedData) {
          element.value = savedData[element.name];
        }
      }
      displayAlert("Le formulaire a récupéré les données !");
    }
  }
}

document.onload = retrieveFormData();

window.addEventListener("storage", (event) => {
  const value = JSON.parse(event.newValue);
  for (const element of formElements) {
    element.value = value[element.id];
  }
});
