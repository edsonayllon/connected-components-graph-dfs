// grid is a 2 dimensional array
const grid = [
    [1,1,0,0,0,0,0,1,1],
    [1,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,1,1,1],
    [1,0,0,1,1,0,0,0,1]
]

// checks each cell for a graph, ignores graphs already found
const findGraphs = (grid) => {
    let result = {
        grid, 
        graphs: []
    }
    
    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[0].length; column++) {
            if (result.grid[row][column] === 1) {
                let prog = dfs(result.grid, row, column)
                result.grid = prog.grid
                result.graphs.push({nodes: prog.nodes})
            }
        }
    }

    console.log(result, 'graphs: ', result.graphs.length)
    return result
}

// depth first search function, where r is row, and c is column
const dfs = (grid, r, c, incrementor = [0]) => {
    // indicate if node is node that it has been visited
    if (grid[r][c] === 1) {
        grid[r][c] = 'v'
        incrementor.push(1)
    }

    // define row and column vectors
    const v_r = [-1,-1,-1, 0, 1, 1, 1, 0]
    const v_c = [-1, 0, 1, 1, 1, 0,-1,-1]

    // check if node has edges, iterates through vectors containing 8 directions
    for (let i = 0; i < v_r.length; i++) {
        if (isNode(r + v_r[i], c + v_c[i], grid)) {
            dfs(grid, r + v_r[i], c + v_c[i], incrementor)
        }
    }

    return { 
        grid,
        nodes: incrementor.reduce((a, b) => a + b, 0)
    }
}

// check if cell is a node
const isNode = (r, c, grid) => {
    if (r >= 0 && c >= 0 
        && r < grid.length && c < grid[0].length
        && grid[r][c] === 1
    ) {
        return true
    } else {
        return false
    }
}

findGraphs(grid)