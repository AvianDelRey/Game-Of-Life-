import { 
  initGrid, 
  iterateGrid, 
  findNeighborCount,
  areYouAliveBitch,
} from './app.js';

let grid = initGrid();
let gridCopy = grid;
/** 
 * We need to iterate over the grid
 */
function tick(grid) {
  
  for (let i = 0; i < grid.length; i++) {
    const col = grid[i];
    for (let j = 0; j < col.length; j++) {
      // Hey does this cell change in the new generation
      // If so lets update the copy
      const cell = grid[i][j];
      // What is a cell? -> What is it again? what value 1 or 0. SO a cell is either 0 or 1. yes. So when I ask again.. lol please keep that answer
      const aliveNeighborCount = findNeighborCount(grid, i, j);
      const updateToCell = areYouAliveBitch(cell, aliveNeighborCount);
      gridCopy[i][j] = updateToCell; 
    }
  }
  grid = gridCopy;
}

console.log(` START --- First Generatiojn`);
console.table(grid);
console.log(` END --- First Generation`);
console.log('----TICK-----');
tick(grid)
console.log(` START --- Next Generation`);
console.table(grid);
console.log(` END --- Next Generation`);
// Can you see this? Roy? yes okay cool
// lol dont get distracted :) So lets go into app.js.. also if you click on the share icon, you can right click my name and follow me to the side.. 