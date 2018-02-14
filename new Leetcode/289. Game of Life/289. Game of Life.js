/**
 * Created by sindhuhari on 2/8/18.
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] === 1 && getLiveNeighbours(board, i, j) < 2) {
                board[i][j] = "dead"
            } else if (board[i][j] === 1 && getLiveNeighbours(board, i, j) > 3) {
                board[i][j] = "dead"
            } else if (board[i][j] === 0 && getLiveNeighbours(board, i, j) === 3) {
                board[i][j] = "live"
            }
        }
    }
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if(board[i][j] === "dead") {
                board[i][j] = 0;
            } else if (board[i][j] === 'live') {
                board[i][j] = 1
            }
        }
    }
};

var getLiveNeighbours = function (board, row, col) {
    var liveNeighbours = 0;
    for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
            var rowIndex = i + row;
            var columnIndex = j + col;
            if (rowIndex > -1 && rowIndex < board.length && columnIndex > -1 && columnIndex < board[0].length) {
                if (board[rowIndex][columnIndex] === 1 || board[rowIndex][columnIndex] === 'dead') {
                    liveNeighbours = liveNeighbours + 1;
                }
            }
        }
    }
    if (board[row][col] === 1 || board[row][col] === 'dead') {
        liveNeighbours = liveNeighbours - 1;
    }
    return liveNeighbours
};


gameOfLife([[1, 0, 1, 1], [0, 1, 0, 1], [1, 1, 0, 0], [1, 0, 0, 1]]);