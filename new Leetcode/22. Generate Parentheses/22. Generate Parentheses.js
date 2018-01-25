/**
 * Created by sindhuhari on 1/23/18.
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var result = [];
    var finalResult = [];
    if (n > 0) {
        return getParenthesis(finalResult, 0, result, n, 0, 0)
    }
};

var getParenthesis = function (finalResult, pos, result,  n, openCount, closeCount) {
    if (closeCount === n) {
        finalResult.push(result.join(""));
    } else {
        if (openCount > closeCount) {
            result[pos] = ')';
            getParenthesis(finalResult, pos + 1, result, n, openCount, closeCount + 1);
        }

        if(openCount < n) {
            result[pos] = '(';
            getParenthesis(finalResult, pos + 1, result, n, openCount + 1, closeCount);
        }
    }
    return finalResult;
};

console.log(generateParenthesis(4));