/**
 * Created by sindhuhari on 2/8/18.
 */


/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    var mapping = {};
    return minNumOfSquares(n, mapping)
};

var minNumOfSquares = function (n, mapping) {
    if (n < 4) {
        return n;
    }
    var result = n;

    if (mapping[n]) {
        return mapping[n]
    }

    for (var i = 1; i <= n; i++) {
        var temp = i * i;
        if (temp > n) {
            break;
        } else {
            var currentResult = minNumOfSquares(n - temp, mapping);
            mapping[n - temp] = currentResult;
            result = Math.min(result, currentResult + 1)
        }
    }
    return result;
};

console.log(numSquares(4));