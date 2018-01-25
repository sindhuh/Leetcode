/**
 * Created by sindhuhari on 1/20/18.
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var start = 0;
    var map = {};
    if(!s || s.length === 0) {
        return -1;
    }
    if(s.length === 1) {
        return 1
    }

    for(var i = 0 ; i < s.length; i++) {
        if(map[s[i]] > -1) {
           if (map[s[i]] >= start) {
               start = map[s[i]] + 1;
           }
        }
        map[s[i]] = i;
        max = Math.max(max, i - start + 1)
    }

    return max;
};