let grid;
let gridold;
let gridmax;

function initGrid() {
  gridmax = 100;
  grid = new Array(gridmax);
  for (let i = 0; i < gridmax; i++) {
    grid[i] = new Array(gridmax);
    for (let j = 0; j < gridmax; j++) {
      const cells = Math.random() > .5 ? 0 : 1;
      grid[i][j] = cells;
    }
  }
  return grid;
}

grid = initGrid()

//iterate through grid

function iterateGrid() {
  // console.log(`grid => ${grid}`)
  // console.log(`grid. length => ${grid.length }`)
  for (let i = 0; i < grid.length; i++) {
    let cols = grid[i]
     for (let j = 0; j < cols.length; j++) {
        let cell = grid[i][j];
      // console.log(`cells => ${cell}`)

      // todo: find cells neightbors that are alive
      const neighborCount = findNeighborCount(grid, i, j);
      console.log(neighborCount)
    }

  } 
}

const cell = iterateGrid()

//find count of neighbors
function findNeighborCount(grid, i, j) {
  let aliveNeightborCount = 0;
  /**
   *  NW  N.  NE
   *  W  Cell E
   *      S
   * 
   * i => up and down
   * j => left and right
   */
   let neighbors = {
    NW: grid[i - 1][j - 1],
    N: grid[i - 1][j],
    NE:grid[i - 1][j + 1],
    W: grid[i][j - 1],
    E: grid[i][j + 1],
    SW: grid[i + 1][j - 1],
    S: grid[i + 1][j],
    SE: grid[i + 1][j + 1],
  }
     
  for (const coordinate in neighbors) {
    if (neighbors.hasOwnProperty(coordinate)) {
      // console.log(`coordinates ${coordinate} neighbor ${neighbors[coordinate]}`)
      const neighbor = neighbors[coordinate];
      if (neighbor) aliveNeightborCount += 1;
    }
  }
  return aliveNeightborCount;
}

