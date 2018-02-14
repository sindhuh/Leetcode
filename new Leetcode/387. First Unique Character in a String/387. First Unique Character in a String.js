/**
 * Created by sindhuhari on 2/5/18.
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1
    }
    for (i = 0; i < s.length; i++) {
        if(map[s[i]] === 1) {
            return i;
        }
    }
    return -1

};