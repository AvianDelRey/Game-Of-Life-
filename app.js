let grid;
let gridold;
let gridmax;

const canvas = document.getElementById("first block");
const ctx = canvas.getContext("2d");

function initGrid() {
  gridmax = 20;
  grid = new Array(gridmax);
  for (let i = 0; i < gridmax; i++) {
    grid[i] = new Array(gridmax);
    for (let j = 0; j < gridmax; j++) {
      const cells = Math.random() > 0.5 ? 0 : 1;
      grid[i][j] = cells;
    }
  }
  return grid;
}

//iterate through grid

function iterateGrid() {
  let grid = initGrid();
  console.log(`grid => ${grid}`);
  // console.log(`grid. length => ${grid.length }`)
  for (let i = 0; i < grid.length; i++) {
    let cols = grid[i];
    for (let j = 0; j < cols.length; j++) {
      let cell = grid[i][j];
      // console.log(`cells => ${cell}`)
      // console.log(`grid ${grid}`);
      //todo: find cells neightbors that are alive
      const neighborCount = findNeighborCount(grid, i, j);
      // console.log(`neighborCount ${neighborCount}`);
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
    NE: grid?.[i - 1]?.[j + 1],
    W: grid?.[i]?.[j - 1],
    E: grid?.[i]?.[j + 1],
    SW: grid?.[i + 1]?.[j - 1],
    S: grid?.[i + 1]?.[j],
    SE: grid?.[i + 1]?.[j + 1],
  };
  // We are iterating over an object because
  // we are looping over the properties
  //  console.log(`grid ${grid}`)
  for (const coordinate in neighbors) {
    if (neighbors.hasOwnProperty(coordinate)) {
      // console.log(
      //   `coordinates ${coordinate} neighbor ${neighbors[coordinate]}`
      // );
      const neighbor = neighbors[coordinate];
      neighbor === 1 ? (aliveNeightborCount += 1) : aliveNeightborCount;
    }
  }
  return aliveNeightborCount;
}



// You can use the Game of Life rules to determine if this cell should die based on the neighbor count
// This method is not correct! What are you looping over.
// Next task... Make this work!
// Are you still here?
// Let me know when you are here
//here
// So what are we passing into this function
// Specifically
// What is a cell = 1 or 0 // Sweet! OHHHHH .. yeah lol okay lets keep going.. so 
// What is a neighborCount =>  NeighborCount is the returned value from the last function.. ( its not returned.. its the value passed in) 
// We are only looking at this function.. dont think about the others right now.. we are just trying to understand what this func is doing
// So give me a possible value for neighborCount => 1-8 because there are 8 neighbors to a cell..c
// Sweet. I think we are on the same page
// Now lets step into the function... lets just pretend we pass in the following
// cell: 0
// neighborCount: 4
// slow down
// lets clear up what we are even doing okay.. my thoughts were to loop through the 

function areYouAliveBitch(cell, neighborCount) {
  // So why is there a for loop? and if we have one.. what are we looping over.. just look at this now.. give what we are passing in.. 
  // I think cleaning up the code below is going to be too hard.. so lets ask a better question.. 
  // What is this function doing?
  // this function is taking in a cell (0 or 1) and a neighborCount (1 through 8)
  // You need to determine if the cell is dead or alive based on the rules of the game of life ? yes but
  // we can only determine that through the current cell and neighbor count.. .. which is what is passed into the function...
  // so the for loop isnt nessecary.. understood.. im gonna change what i had lol
  // and then changing the cell if the statement is true (you are being very vauge again... )
  // Okay
    let updatedValueOfCell = 0;
    // Lets just return this value 
    // Sorry I was talking to Pratik.. okay i think i have to use else if
      // if cell is alive and neighbor count is 2, cell return cell as 1
      if ((cell === 1 && neighborCount === 2)) {
        return updatedValueOfCell += 1;
      }
      // if cell is alive and neighbor count is 3, cell return cell as 1
      else if ((cell === 1 && neighborCount === 3)) {
        return updatedValueOfCell += 1;
      }
      // if cell is dead and neighbor count is 3 or more, cell return cell as 1
      else if (cell === 0 || neighborCount >= 2) {
        return updatedValueOfCell += 1;
      }
      // if cell is dead already, cell returns dead in next life 
      else { cell === 0 
        return updatedValueOfCell ;
      }
    
  return updatedValueOfCell ;
}


// const newCells = areYouAliveBitch()

//function nextLife(newCells){

// }

export {
  initGrid, 
  iterateGrid, 
  findNeighborCount,
  areYouAliveBitch,
}
