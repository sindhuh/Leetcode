/**
 * Created by sindhuhari on 1/25/18.
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var newBoard = board
    var result = false;
    var m = newBoard.length;
    var n = newBoard[0].length;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if(searchWord(newBoard, word, i, j, 0)) {
                result = true
            }
        }
    }
    return result;
};

var isWordFound = function (board, word, i, j, k) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
        return false;
    }
    if (board[i][j] === word[k]) {
        var temp = board[i][j];
        board[i][j] = '#';
        if (k === word.length - 1) {
            return true;
        } else if (isWordFound(board, word, i, j - 1, k + 1) ||
            isWordFound(board, word, i, j + 1, k + 1) ||
            isWordFound(board, word, i - 1, j, k + 1) ||
            isWordFound(board, word, i + 1, j, k + 1)) {
            return true
        }
        board[i][j] = temp;
    }

};

console.log(exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'ABCCED'))