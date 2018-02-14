/**
 * Created by sindhuhari on 2/4/18.
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = '#';
            }
        }
    }

    for (i = 0; i < board.length; i++) {
        if (board[0][i] === '#') {
            board = fliptoZero(board, 0, i)
        }
    }

    for (i = 0; i < board[0].length; i++) {
        if (board[i][0] === '#') {
            board = fliptoZero(board, i, 0)
        }
    }

    for (i = 0; i < board[0].length; i++) {
        if (board[i][board.length - 1] === '#') {
            board = fliptoZero(board, i, board.length - 1)
        }
    }

    for (i = 0; i < board.length; i++) {
        if (board[board.length - 1][i] === '#') {
            board = fliptoZero(board, board.length - 1, i)
        }
    }

    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[0].length; j++) {
            if (board[i][j] == '#') {
                board[i][j] = 'X';
            }
        }
    }

};


var fliptoZero = function (board, row, col) {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] !== '#') {
        return;
    }
    board[row][col] = 'O';
    fliptoZero(board, row + 1, col);
    fliptoZero(board, row - 1, col);
    fliptoZero(board, row, col + 1);
    fliptoZero(board, row, col - 1);
    return board;
};





