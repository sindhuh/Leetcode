var exist = function (board, word) {
    var newBoard = board;

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

var searchWord = function (board, word, i, j, k) {
    var m = board.length;
    var n = board[0].length;
    if (i < 0 || j < 0 || j >= n || i >= m) {
        return false;
    }
    if (board[i][j] === word[k]) {
        var temp = board[i][j];
        board[i][j]='#';
        if (k === word.length - 1) {
            return true;
        } else if (searchWord(board, word, i, j - 1, k + 1) ||
            searchWord(board, word, i + 1, j, k + 1) ||
            searchWord(board, word, i - 1, j, k + 1) ||
            searchWord(board, word, i, j + 1, k + 1)) {
            return true;
        }
        board[i][j]=temp;
    }
    return false;
};


console.log(exist(["aa"], 'aaa'));