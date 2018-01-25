/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    if (!board || board.length < 9 || board[0].length < 9) {

        return false
    }
    var mapping = {};
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (mapping[board[i][j]]) {
                    return false;
                } else {
                    mapping[board[i][j]] = true;
                }
            }
        }
    }
    mapping = {};
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (board[j][i] !== '.') {
                if (mapping[board[j][i]]) {
                    return false;
                } else {
                    mapping[board[j][i]] = true;
                }
            }
        }
    }

    for (var m = 0; m < 9; m++) {
        for (i = (m / 3) * 3; i < (m / 3) * 3 + 3; i++) {
            for (j = (m % 3) * 3; j < (m * 3) * 3 + 3; j++) {
                if (board[i][j] !== '.') {
                    if (mapping[board[i][j]]) {
                        return false;
                    } else {
                        mapping[board[i][j]] = true;
                    }
                }
            }
        }
    }

};

console.log(isValidSudoku([[".","8","7","6","5","4","3","2","1"],
    ["2",".",".",".",".",".",".",".","."],
    ["3",".",".",".",".",".",".",".","."],
    ["4",".",".",".",".",".",".",".","."],
    ["5",".",".",".",".",".",".",".","."],
    ["6",".",".",".",".",".",".",".","."],
    ["7",".",".",".",".",".",".",".","."],
    ["8",".",".",".",".",".",".",".","."],
    ["9",".",".",".",".",".",".",".","."]]))