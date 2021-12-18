const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
//parameters: height and width
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");

const saveLayer = (_canvas) => {
  fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
  console.log("image created");
};

const drawLayer = async () => {
  const image = await loadImage("./eye_ball.png");
  //   console.log(image);
  //   ctx.drawImage(img, x, y, width, height);
  ctx.drawImage(image, 0, 0, 1000, 1000);
  console.log("ran");
  saveLayer(canvas);
};
drawLayer();
