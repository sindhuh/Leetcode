/**
 * Created by sindhuhari on 1/20/18.
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    var count = [];
    count[0] = 0;
    count[1] = 1;
    if(s.length === 0 || s === null) {
        return 0
    }
    if(s.length === 1 && s[0] === '0') {
        return 0
    }
    for (var i = 2; i <= s.length; i++) {
        count[i] = 0;
        if (s[i - 1] > '0') {
            count[i] = count[i - 1];
        }
        if (s[i - 2] === '1' || s[i - 2] === '2' && s[i - 1] < '7') {
            count[i] = count[i] + count[i - 2]
        }
    }
    return count[s.length]
};

console.log(numDecodings('10'));