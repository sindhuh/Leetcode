/**
 * Created by sindhuhari on 2/5/18.
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    if(!s.length || s.length === 0) {
        return true;
    }

    for (var i = 1; i <= s.length; i++) {
        if(wordDict.indexOf(s.substr(0, i)) > -1 && wordBreak(s.substr(i), wordDict)) {
            return true;
        }
    }

    return false;
};

console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaa" +
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" +
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" +
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))