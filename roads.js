let { Queue } = require("./dataStructures/stacksNqueues.js");

function roadsAndLibraries(n, c_lib, c_road, array) {
  /*
  Inputs:
  n: int, number of cities
  c_lib: int, cost of library
  c_road: int, cost of roads
  cities: array, connections
  */

  let totalCost;

  if (c_road >= c_lib) {
    totalCost = c_lib * n;
  } else {
    let adjacencyList = {};
    let cities = Array.from(Array(n).keys(), x => x + 1);

    cities.forEach(city => {
      adjacencyList[city] = { connections: [] };
    });

    array.forEach(connection => {
      let first = connection[0];
      let second = connection[1];

      adjacencyList[first].connections.push(second);
      adjacencyList[second].connections.push(first);
    });

    let roadCount = 0;
    let visitedNodes = new Set(); // Set or array of booleans?
    let toDo = new Queue();
    let libraryCount = 0;

    for (let node in adjacencyList) {
      if (!visitedNodes.has(parseInt(node))) {
        toDo.enqueue(parseInt(node));
        libraryCount++;
        visitedNodes.add(parseInt(node));
        while (toDo.values.length) {
          let popped = toDo.dequeue();

          const connections = adjacencyList[popped].connections;

          connections.forEach(connection => {
            if (!visitedNodes.has(connection)) {
              roadCount++;
              toDo.enqueue(connection);
              visitedNodes.add(connection);
            }
          });
        }
      }
    }
    totalCost = libraryCount * c_lib + c_road * roadCount;
  }

  return totalCost;
}

roadsAndLibraries(4, 2, 1, [[1, 4], [3, 4], [2, 3]]);

module.exports = {
  roadsAndLibraries
};
