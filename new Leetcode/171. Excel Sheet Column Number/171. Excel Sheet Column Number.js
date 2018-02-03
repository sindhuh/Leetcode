/**
 * Created by sindhuhari on 2/2/18.
 */
/**
 * @param {string} s
 * @return {number}
 */


var titleToNumber = function (s) {
    var result = 0;
    var j = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        console.log(result, (s[i].charCodeAt(0) - 64))
        result = result + Math.pow(26, j) * (s[i].charCodeAt(0) - 64);
        j++
    }
    return result
};

console.log(titleToNumber('AB'))