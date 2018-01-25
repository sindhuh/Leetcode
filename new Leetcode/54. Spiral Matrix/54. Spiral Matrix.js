/**
 * Created by sindhuhari on 1/25/18.
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if(!matrix || matrix.length === 0) {
        return []
    }
    var k = 0;
    var l = 0;
    var m = matrix.length;
    var n = matrix[0].length;
    var result = [];
    while (k < m && l < n) {
        for (var i = l; i < n; i++) {
            result.push(matrix[k][i])
        }
        k = k + 1;

        for (i = k; i < m; i++) {
            result.push(matrix[i][n - 1])
        }
        n = n - 1;

        if (k < m) {
            for (i = n - 1; i >= l; i--) {
                result.push(matrix[m - 1][i])
            }
            m = m - 1;
        }

        if (l < n) {
            for (i = m - 1; i >= k; i--) {
                result.push(matrix[i][l])
            }
            l = l + 1;
        }

    }

    return result;
};
