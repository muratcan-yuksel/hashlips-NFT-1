const fs = require("fs");
//this one goes in the terminal. like :
//node index.js 3
//3 here is the argument we're passing
//meaning it'll create 3 artworks bcs we defined it on the edition const like that
const myArgs = process.argv.slice(2);
const { createCanvas, loadImage } = require("canvas");
const { layers, width, height } = require("./input/config.js");
//parameters: height and width
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
const edition = myArgs.length > 0 ? Number(myArgs[0]) : 1;
var metadata = [];
var attributes = [];
var hash = [];
var decodedHash = [];

const saveLayer = (_canvas, _edition) => {
  fs.writeFileSync(`./output/${_edition}.png`, _canvas.toBuffer("image/png"));
  console.log("image created");
};

const addMetadata = (_element, _layer) => {
  let dateTime = Date.now();

  let tempMetadata = {
    hash: "",
    decodedHash: [],
    edition: "",
    date: dateTime,
    attributes: [],
  };
};

const drawLayer = async (_layer, _edition) => {
  //get a random element
  let element =
    _layer.elements[Math.floor(Math.random() * _layer.elements.length)];
  // console.log(element);
  addMetadata(element, _layer);
  const image = await loadImage(`${_layer.location}${element.fileName}`);
  //   ctx.drawImage(img, x, y, width, height);
  ctx.drawImage(
    image,
    _layer.position.x,
    _layer.position.y,
    _layer.size.width,
    _layer.size.height
  );
  // console.log(
  //   `I created the ${_layer.name} layer, and choose element ${element.name}`
  // );
  saveLayer(canvas, _edition);
};

for (let i = 1; i <= edition; i++) {
  layers.forEach((layer) => {
    drawLayer(layer, i);
  });
  console.log("creating edition" + i);
}
