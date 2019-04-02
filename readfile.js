const fs = require("fs");
const { roadsAndLibraries } = require("./roads.js");

let inputString = "";
let currentLine = 0;

inputString += fs.readFileSync("./data/input.txt");

let inputArray = inputString
  .replace(/\s*$/, "")
  .split("\n")
  .map(str => str.replace(/\s*$/, ""));

function readLine() {
  return inputArray[currentLine++];
}
const q = parseInt(readLine(), 10);

for (let qItr = 0; qItr < 1; qItr++) {
  const nmC_libC_road = readLine().split(" ");

  const n = parseInt(nmC_libC_road[0], 10);

  const m = parseInt(nmC_libC_road[1], 10);

  const c_lib = parseInt(nmC_libC_road[2], 10);

  const c_road = parseInt(nmC_libC_road[3], 10);

  let cities = Array(m);

  for (let i = 0; i < m; i++) {
    cities[i] = readLine()
      .split(" ")
      .map(citiesTemp => parseInt(citiesTemp, 10));
  }
  roadsAndLibraries(n, c_lib, c_road, cities);
}
