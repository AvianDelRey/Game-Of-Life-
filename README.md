# Game-Of-Life-
This is my first project! this will be all notes and ideas

## Author 
Roy Haynes 


#### 
1. [x] We create a grid with rows and columns each filled with cells
2. [x] Each of the cells in the grid has two possible states 1 or 0.
    [] (2.a) 1 means the cell lives on to the next generation
    [] (3.b) 0 mean the cell dies in the next generation
3. [] Each cell interacts with its 8 neighbors (diagonally, horizontally or vertically)
    [] (3.a) you need to know which of the neighbors of the surrounding cell is alive.
4. [] For each step in time;
 
    [] (4.a) with the information from (3.a) you are able to apply the rules for the game of life.

        **Hint:** We would want to create a copy of our grid which will hold the current generation state. Then we would want to iterate over the grid and for each cell we need to determine if the cell is going to die in the next generation by getting the neighbor alive count and applying the rules of the game of life. 
    Rules:

    1. Any live cell with two or three live neighbours survives.
    2. Any dead cell with at least three live neighbours becomes a live cell.
    3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

          1st Gen
        [0 0 1 0 0]
        [0 1 0 1 0]
        [0 0 1 0 0]
        [0 1 0 1 0]
        [1 0 1 0 0]

        [0 0 1 0 0]
        [0 1 1 1 0]
        [0 1 0 1 0]
        [0 1 1 1 0]
        [0 1 1 0 0]

           2nd Gen

        [0 0 1 0 0]
        [0 1 1 1 0]
        [0 1 0 1 0]
        [0 1 1 1 0]
        [0 1 1 0 0]

        [0 0 1 0 0]
        [0 1 1 1 0]
        [0 1 0 1 0]
        [0 1 1 1 0]
        [0 1 1 0 0]