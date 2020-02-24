// grid is a 2 dimensional array
const grid = [
    [1,1,0,0,0],
    [1,0,1,0,1],
    [0,0,0,0,0],
    [0,0,0,0,1],
    [1,1,0,1,0]
]

const findAnimals = (grid) => {
    dfs(0,0, grid)
}

// depth first search function, where r is row, and c is column
const dfs = (r, c, grid) => {
    // indicate if node is node that it has been visited
    if (grid[r][c] > 0) grid[r][c] = 'v'

    // define row and column vectors
    const v_r = [-1,-1,-1, 0, 1, 1, 1, 0]
    const v_c = [-1, 0, 1, 1, 1, 0,-1,-1]

    // iterate through neighbor cells
    for (let i = 0; i < v_r.length; i++) {
        if (isNode(r + v_r[i], c + v_c[i], grid)) {
            dfs(r + v_r[i], c + v_c[i], grid)
        }
    }
}

const isNode = (r, c, grid) => {
    console.log('Testing ', r, c)
    grid.forEach(row => console.log(row))
    
    // check if cell is node, and not previously visited, within boundary
    if (r >= 0 && c >= 0 
        && r <= grid.length && c <= grid[0].length
        && grid[r][c] != 0 && grid[r][c] != 'v'
    ) {
        return true
    } else {
        return false
    }

}

findAnimals(grid)