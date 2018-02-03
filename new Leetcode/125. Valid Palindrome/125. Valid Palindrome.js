/**
 * Created by sindhuhari on 2/1/18.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s.replace(/\W/g, '');
    var tempStr = "";
    for (var i = 0; i < s.length; i++) {
        if (isAlphanumeric(s[i])) {
            tempStr = tempStr + s[i];
        }
    }
    if(!tempStr || tempStr.length == 0) {
        return true
    }

    return checkIsPalindrome(tempStr.toLowerCase());

};

var checkIsPalindrome = function (str) {
    var j = str.length - 1;
    var i = 0;
    while (!(i === j) && i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i = i + 1;
        j = j - 1;

    }
    return true;
};

var isAlphanumeric = function (char) {
    return /[A-W]/.test(char) || /[a-z]/.test(char) || /[0-9]/.test(char);
};

console.log(isPalindrome("ab"))