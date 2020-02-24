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

// depth first search function
const dfs = (row, column, grid) => {
    // define row and column vectors
    const v_r = [-1,-1,-1,0,1,1,1,0]
    const v_c = [-1,0,1,1,1,0,-1,-1]

    // iterate through neighbor cells
    for(let i=0; i<v_r.length; i++) {
        console.log(
            row+v_r[i], 
            column+v_c[i]
        )
    }
}

findAnimals(grid)