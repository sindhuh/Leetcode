/**
 * Created by sindhuhari on 2/4/18.
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    var visited = [];
    var numOfIslands = 0;
    for (var m = 0; m < grid.length; m++) {
        visited[m] = []
    }
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                search(grid, i, j, visited);
                console.log(">>> ")

                for (m = 0; m < grid.length; m++) {
                    console.log(visited[m])
                }
                numOfIslands = numOfIslands + 1
            }
        }
    }

    return numOfIslands;

};

var search = function (grid, row, column, visited) {
    visited[row][column] = true;
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            var rowIndex = row + i;
            var columnIndex = column + j;
            if (rowIndex >= 0 && rowIndex < grid.length &&
                columnIndex >= 0 && columnIndex < grid[0].length &&
                grid[rowIndex][columnIndex] === '1' && !visited[rowIndex][columnIndex]) {

                search(grid, rowIndex, columnIndex, visited)
            }
        }
    }
};

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));