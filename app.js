// let grid;
// let gridold;
// let gridmax;

function initGrid() {
  gridmax = 5;
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

//iterate through grid

function iterateGrid() {
  let grid = initGrid();
  console.log(`grid => ${grid}`)
  // console.log(`grid. length => ${grid.length }`)
  for (let i = 0; i < grid.length; i++) {
    let cols = grid[i]
     for (let j = 0; j < cols.length; j++) {
        let cell = grid[i][j];
      // console.log(`cells => ${cell}`)
        console.log(`grid ${grid}`)
      //todo: find cells neightbors that are alive
      const neighborCount = findNeighborCount(grid, i, j);
      console.log(`neighborCount ${neighborCount}`)
    }

  } 
}

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
   const neighbors = {
    NW: grid?.[i - 1]?.[j - 1],
    N: grid?.[i - 1]?.[j],
    NE:grid?.[i - 1]?.[j + 1],
    W: grid?.[i]?.[j - 1],
    E: grid?.[i]?.[j + 1],
    SW: grid?.[i + 1]?.[j - 1],
    S: grid?.[i + 1]?.[j],
    SE: grid?.[i + 1]?.[j + 1],
  }
   // We are iterating over an object because 
   // we are looping over the properties
  //  console.log(`grid ${grid}`)
  for (const coordinate in neighbors) {
    if (neighbors.hasOwnProperty(coordinate)) {
      console.log(`coordinates ${coordinate} neighbor ${neighbors[coordinate]}`)
      const neighbor = neighbors[coordinate]
      neighbor === 1 ? aliveNeightborCount += 1 : aliveNeightborCount;
    }
  }
  return aliveNeightborCount;
}


let cell = iterateGrid()

// You can use the Game of Life rules to determine if this cell should die based on the neighbor count

function areYouAliveBitch(cell,neighborCount) {
let newCell = 0
for(let i = 0; i < cell.length; i++){
  for(let j = 0; j < cell.length; j++ ){
    const neighborCount = findNeighborCount()
    let cell = cell[i][j]
  if ( cell === 1 && neighborCount === 2 || neighborCount === 3  ) {
    return newCell += 1
  } 
      if ( neighborCount >= 3 ) {
       return newCell += 1
         } 
        if( cell === 1 ){
          return newCell 
           } 
       }
    } 
    return newCell
  }

//const newCells = areYouAliveBitch()
//function nextLife(newCells){


// }
