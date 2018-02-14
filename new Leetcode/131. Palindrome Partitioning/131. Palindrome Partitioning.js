/**
 * Created by sindhuhari on 2/6/18.
 */
/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function (s) {
    return addStrings(s)

};


var addStrings = function (s) {
    var finalResult = [];
    if (!s || s.length === 0) {
        return [];
    }
    var str = "";
    for (var i = 0; i < s.length; i++) {
        str = str + s[i];
        if(isPalindrome(str)) {
            var subResults = addStrings(s.substr(i + 1));
            if(subResults.length === 0) {
                subResults.push([])
            }
            for(var j = 0 ; j < subResults.length; j++) {
                subResults[j].unshift(str);
            }
            finalResult = finalResult.concat(subResults);
        }

    }

    return finalResult;
};


var isPalindrome = function (str) {
    var j = str.length - 1;
    var i = 0;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i = i + 1;
        j = j - 1;

    }
    return true;
};

console.log(partition("nitin"))
