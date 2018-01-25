/**
 * Created by sindhuhari on 1/20/18.
 */


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (string) {
    var maxlength = 0, tempLength = 0;
    var max_palindromic_sring = "";
    var k, j;
    if(string.length === 1) {
        return string;
    }
    if(string === string.split("").reverse().join('')) {
        return string;
    }

    for (var i = 0; i < string.length; i++) {
        if (string[i - 1] === string[i + 1]) {
            tempLength = 0;
            k = i - 1;
            for (j = i + 1; j < string.length; j++) {
                if (string[k] === string[j]) {
                    tempLength = tempLength + 2;
                    k = k - 1;
                } else {
                    break;
                }
            }
            tempLength = tempLength + 1;
            if (tempLength > maxlength) {
                maxlength = tempLength;
                max_palindromic_sring = string.substring(k + 1, j);
            }
        } else if (string[i] === string[i + 1]) {
            tempLength = 0;
            k = i - 1;
            for (j = i + 2; j < string.length; j++) {
                if (string[k] === string[j]) {
                    tempLength = tempLength + 2;
                    k = k - 1;
                } else {
                    break;
                }
            }

            tempLength = tempLength + 2;
            if (tempLength > maxlength) {
                maxlength = tempLength;
                max_palindromic_sring = string.substring(k + 1, j);
            }

        }
    }
    if(max_palindromic_sring === "") {
        return string.substring(0, 1)
    }
    return max_palindromic_sring;

};
console.log(longestPalindrome("ffffffffffffffffffffffffff" +
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffff" +
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" +
    "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" +
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" +
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" +
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" +
    "fffffffffffffffffffffffffffffffffffffffggggggggggggggggggggggggggggggggggggggggggggggggggg" +
    "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg" +
    "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg" +
    "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg" +
    "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg" +
    "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"))