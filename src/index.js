import "./style.css";

// ############# DRAG AND DROP WITHOUT API ########

const img = document.querySelector("img");
let shiftX = 0;
let shiftY = 0;
let container;

img.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

function move(event) {
  img.style.left = event.pageX - shiftX + "px";
  img.style.top = event.pageY - shiftY + "px";
}

function mouseMove(event) {
  img.hidden = true;
  const elem = document.elementFromPoint(event.pageX, event.pageY);

  img.hidden = false;
  if (elem && elem != container) {
    container = elem;
  }
  // console.log(elem);
  move(event);
}

img.addEventListener("mousedown", (event) => {
  console.log(event);
  img.classList.add("border");
  img.style.position = "absolute";
  const rect = img.getBoundingClientRect();
  shiftX = event.pageX - rect.left;
  shiftY = event.pageY - rect.top;
  move(event);
  // img.style.left = event.pageX - img.offsetWidth / 2 + "px";
  // img.style.top = event.pageY - img.offsetHeight / 2 + "px";

  img.addEventListener("mousemove", mouseMove);
});

img.addEventListener("mouseup", (event) => {
  img.style.position = "static";
  img.style.left = "";
  img.style.top = "";
  if (container) {
    container.appendChild(img);
  }
  img.removeEventListener("mousemove", mouseMove);
  img.classList.remove("border");
});
