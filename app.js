let cols;
let rows;
let grid;


//function to make 2d array but there is nothing inside of them

function fillArr(cols, rows) {
  rows = 5
  cols = 5
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    console.log(arr[i]);
    return arr
  }
}

//this should fill each cell in the array with either a 1 or a 0
// having a problem filling each cell here 

function setup() {
  grid = fillArr(cols, rows)
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = grid.fill(math.floor(Math.random(2)))
      
    }
  }
  return grid
}
