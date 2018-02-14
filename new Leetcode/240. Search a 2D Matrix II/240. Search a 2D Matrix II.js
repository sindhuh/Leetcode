/**
 * Created by sindhuhari on 2/13/18.
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    var i = matrix.length - 1;
    var j = 0;
    while (i >= 0 && j < matrix[0].length) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            i = i - 1;
        } else {
            j = j + 1;
        }
    }
    return false;
};