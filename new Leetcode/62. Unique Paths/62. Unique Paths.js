/**
 * Created by sindhuhari on 2/4/18.
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    return countPaths(0, 0, m, n);
};

var countPaths = function (i, j, m, n) {
    if (i == m || j == n) {
        return 1;
    }
    return countPaths(i + 1, j, m, n) + countPaths(i, j + 1, m, n);
};