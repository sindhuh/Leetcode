/**
 * Created by sindhuhari on 2/5/18.
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    console.log(s, k)
    if(s.length < k) {
        return 0;
    }
    var countMap = {};
    var notEnoughLengthChars = {};

    for(var i  = 0 ; i < s.length; i++) {
        countMap[s[i]] = (countMap[s[i]] || 0) + 1;
    }

    for (var key in countMap) {
        if(countMap[key] < k) {
            notEnoughLengthChars[key] = true;
        }
    }

    if(Object.keys(notEnoughLengthChars).length === 0) {
        return s.length;
    }

    console.log(countMap, notEnoughLengthChars)
    var max = 0;
    var j = 0;
    for(i = 0 ; i < s.length; i++) {
        if(notEnoughLengthChars[s[i]]) {
            max = Math.max(max, longestSubstring(s.substring(j, i), k))
            j = i + 1;
        }
    }

    if(i !== j) {
        max = Math.max(max, longestSubstring(s.substring(j, i), k))
    }

    return max;

};

console.log(longestSubstring("aabaaab", 3))