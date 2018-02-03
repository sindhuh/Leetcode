/**
 * Created by sindhuhari on 1/25/18.
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var rows = []; var columns = [];
    for(var  i = 0 ; i < m; i++)  {
        for(var j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                rows.push(i);
                columns.push(j)
            }
        }
    }

    for(i = 0 ; i < m; i++)  {
        for(j = 0; j < n; j++) {
            if(rows.indexOf(i) > -1 || columns.indexOf(j) > -1) {
                matrix[i][j] = 0
            }
        }
    }

    console.log(matrix);
};

setZeroes([[1,2,3], [0,4,5], [7,8,0]])