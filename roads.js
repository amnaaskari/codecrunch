function roadsAndLibraries(n, c_lib, c_road, array) {
  /*
  Inputs:
  n: int, number of cities
  c_lib: int, cost of library
  c_road: int, cost of roads
  array: 2D array of connections i.e. edge list
  */

  let totalCost;

  if (c_road > c_lib) {
    totalCost = c_lib * n;
  } else {
    let adjacencyList = {};
    let cities = Array.from(Array(n).keys(), x => x + 1);

    cities.forEach(city => {
      adjacencyList[city] = { connections: [] };
    });

    array.forEach(connection => {
      // QUESTION: how to scale for more than 2 connections ? is it two two way for loops?
      let first = connection[0];
      let second = connection[1];

      adjacencyList[first].connections.push(second);
      adjacencyList[second].connections.push(first);
    });

    let roadCount = 0;
    let visitedNodes = new Set(); // Set or array of booleans?
    let libraryCount = 0;

    for (let x in adjacencyList) {
      const cityNumber = x;
      const connections = adjacencyList[x].connections;

      if (!visitedNodes.has(parseInt(x))) {
        visitedNodes.add(parseInt(x));
        libraryCount++;
      }

      connections.forEach(city => {
        if (!visitedNodes.has(city)) {
          visitedNodes.add(city);
          roadCount++;
        }
      });
    }

    totalCost = libraryCount * c_lib + c_road * roadCount;
  }

  return totalCost;
}

module.exports = {
  roadsAndLibraries
};
