import "./style-canvas.css";

import tile from "./images-canvas/tile.png";
import picsou from "./images-canvas/picsou.png";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = tile;

const image2 = new Image();
image2.src = picsou;

image.onload = () => {
  //   ctx.drawImage(image, 200, 200);
  //   ctx.drawImage(image, 400, 400, 300, 300);
  const pattern = ctx.createPattern(image, "repeat");
  ctx.rect(0, 0, 800, 800);
  ctx.fillStyle = pattern;
  ctx.fill();
};

image2.onload = () => {
  ctx.drawImage(image2, 45, 0, 100, 95, 300, 300, 100, 100);
};
