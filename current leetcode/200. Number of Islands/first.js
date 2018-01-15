var numIslands = function (grid) {
    var count = 0;
    var visited = [];
    for(var m = 0 ; m < grid.length; m++) {
        visited.push([]);
    }
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                DFSsearch(grid, i, j, visited);
                count = count + 1;
            }
        }
    }
    return count;
};

var DFSsearch = function (grid, row, col, visited) {
    var rowsIndex = [-1, -1, -1,  0, 0,  1, 1, 1];
    var columnIndex = [-1,  0,  1, -1, 1, -1, 0, 1];
    visited[row][col] = true;
    for (var k = 0; k < 8; k++) {
        if (isSafe(grid, row + rowsIndex[k], col + columnIndex[k], visited)) {
            DFSsearch(grid, row + rowsIndex[k], col + columnIndex[k], visited);
        }
    }
};

var isSafe = function (grid, row, col, visited) {
    return row >= 0 && row < grid[0].length && col >= 0 && col < grid.length && grid[row][col] === '1' && !visited[row][col];
};

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));