let grid;
let gridmax = 100; // Change this to make the grid larger or smaller
let isRunning = false
let intervalID

const canvas = document.getElementById("first-block");
const ctx = canvas.getContext("2d");

// Initialize the grid with random states
function initGrid() {
  grid = Array.from({ length: gridmax }, () =>
    Array.from({ length: gridmax }, () => (Math.random() > 0.5 ? 1 : 0))
  );
}

// Count alive neighbors for a specific cell
function findNeighborCount(grid, i, j) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1], // NW, N, NE
    [0, -1],         [0, 1],    // W, E
    [1, -1], [1, 0], [1, 1],    // SW, S, SE
  ];

  return directions.reduce((count, [di, dj]) => {
    const ni = i + di;
    const nj = j + dj;
    return count + (grid[ni]?.[nj] || 0);
  }, 0);
}

// Update the cell state based on Game of Life rules
function updateCellState(cell, neighborCount) {
  if (cell === 1 && (neighborCount === 2 || neighborCount === 3)) {
    return 1; // Alive cell survives
  }
  if (cell === 0 && neighborCount === 3) {
    return 1; // Dead cell becomes alive
  }
  return 0; // Otherwise, cell dies or remains dead
}

// Update the grid for the next generation
function iterateGrid() {
  const nextGrid = grid.map((row, i) =>
    row.map((cell, j) => {
      const neighborCount = findNeighborCount(grid, i, j);
      return updateCellState(cell, neighborCount);
    })
  );
  grid = nextGrid; // Replace the old grid with the new one
  drawGrid(); // Render the updated grid
}

// Draw the grid on the canvas
function drawGrid() {
  const cellSize = canvas.width / gridmax;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < gridmax; i++) {
    for (let j = 0; j < gridmax; j++) {
      ctx.fillStyle = grid[i][j] === 1 ? "black" : "white";
      ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize); // Grid lines
    }
  }
}

// Initialize and start the simulation
function startGame() {
  initGrid();
  drawGrid();
  intervalID = setInterval(iterateGrid, 100); // Update every 500ms
}

function gameLoop() {
  if (!isRunning) return;
  iterateGrid();  // Update the grid state
  drawGrid();  // Redraw the grid
  setTimeout(gameLoop, 100);  // Loop every 100ms (adjust as needed)
}

// Start the game
startGame();

document.getElementById("explodeGame").addEventListener("click", () => {
  if (isRunning) {
    clearInterval(intervalID);  // Stop the current game loop
  }
  isRunning = true;  // Start the game loop
  startGame();  // Initialize game when the button is clicked
});

document.getElementById("startGame").addEventListener("click", () => {
  if (!isRunning) {  // Prevents re-initialization if already running
    isRunning = true;
    // startGame();  // Initialize game when the button is clicked
    gameLoop();  // Start the game loop
  }
});

document.getElementById("pauseGame").addEventListener("click", () => {
  isRunning = false;
  clearInterval(intervalID) // Stop the game loop
});