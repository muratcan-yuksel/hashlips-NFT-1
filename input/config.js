const fs = require("fs");
const dir = __dirname;
const width = 1000;
const height = 1000;

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^|\/\.]/g.test(item))
    .map((i, index) => {
      return {
        // id: index + 1,
        // name: cleanName(i),
        fileName: i,
        // rarity: addRarity(i),
      };
    });
};

const layers = [
  {
    id: 1,
    name: "background",
    location: `${dir}/background/`,
    elements: getElements(`${dir}/background/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 2,
    name: "ball",
    location: `${dir}/ball/`,
    elements: getElements(`${dir}/ball/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 3,
    name: "eye color",
    location: `${dir}/eye color/`,
    elements: getElements(`${dir}/eye color/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 4,
    name: "iris",
    location: `${dir}/iris/`,
    elements: getElements(`${dir}/iris/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 5,
    name: "shine",
    location: `${dir}/shine/`,
    elements: getElements(`${dir}/shine/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 6,
    name: "bottom lid",
    location: `${dir}/bottom lid/`,
    elements: getElements(`${dir}/bottom lid/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 7,
    name: "top lid",
    location: `${dir}/top lid/`,
    elements: getElements(`${dir}/top lid/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
];

console.log(layers);
