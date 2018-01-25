/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    if(!board || board.length < 9 || board[0].length < 9) {
        return false
    }
    for (var i = 0; i < 9; i++) {
        var mapping = {};
        var row = board[i];
        for (var j = 0; j < 9; j++) {
            if(row[j] !== '.') {
                if (mapping[row[j] - '1']) {
                    return false;
                } else {
                    mapping[row[j] - '1'] = true;
                }
            }

        }
    }

    for (j = 0; j < 9; j++) {
        mapping = {};
        for (i = 0; i < 9; i++) {
            if(board[i][j] !== '.') {
                if (mapping[board[i][j] - '1']) {
                    return false;
                } else {
                    mapping[board[i][j] - '1'] = true;
                }
            }
        }
    }

    for (var m = 0; m < 9; m++) {
        mapping = {};
        for (i = (m / 3) * 3; i < (m / 3) * 3 + 3; i++) {
            row = board[i];
            for (j = (m % 3) * 3; j < (m % 3) * 3 + 3; j++) {
                if(row[j] !== '.') {
                    if (mapping[board[i][j] - '1']) {
                        return false;
                    } else {
                        mapping[board[i][j] - '1'] = true;
                    }
                }
            }
        }
    }

    return true;
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
