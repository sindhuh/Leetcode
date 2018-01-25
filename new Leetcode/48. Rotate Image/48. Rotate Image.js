/**
 * Created by sindhuhari on 1/24/18.
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    var size = matrix.length;
    for (var i = 0; i < (size) / 2; i++) {
        for (var j = i; j < size - 1 - i; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[size - 1 - j][i];
            matrix[size - 1 - j][i] = matrix[size - 1 - i][size - 1 - j];
            matrix[size - 1 - i][size - 1 - j] = matrix[j][size - 1 - i];
            matrix[j][size - 1 - i] = temp;
        }
    }

};

rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]);