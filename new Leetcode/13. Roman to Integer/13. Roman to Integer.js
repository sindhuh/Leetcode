/**
 * Created by sindhuhari on 1/22/18.
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var n1 = map[s[i]];
        if (i < s.length - 1) {
            var n2 = map[s[i + 1]];
            if (n1 >= n2) {
                result = result + n1;
            } else {
                result = result + n2 - n1;
                i = i + 1;
            }
        } else {
            result = result + n1
        }
    }
    return result;
};