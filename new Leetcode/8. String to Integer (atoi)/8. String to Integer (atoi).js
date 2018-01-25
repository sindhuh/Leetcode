/**
 * Created by sindhuhari on 1/20/18.
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    if (str.length === 0 || !str) {
        return 0;
    }
    str = str.trim();
    var isNegative = false;
    var i = 0;
    if (str[0] === '-') {
        isNegative = true
        i = i + 1;
    }

    if (str[0] === '+') {
        i = i + 1;
    }

    var result = 0;
    while (i < str.length) {
        if (!isNaN(parseInt(str[i], 10))) {
            result = result * 10 + parseInt(str[i]);
        } else {
            if (isNegative) {
                result = -result;
                if(result < -2147483648) {
                    return -2147483648
                }
            }
            if(result > 2147483647) {
                result = 2147483647
            }
            return result
        }
        i = i + 1
    }

    if (isNegative) {
        result = -result;
        if(result < -2147483648) {
            return -2147483648
        }
    }
    if(result > 2147483647) {
        result = 2147483647
    }
    return result

};


console.log(myAtoi('-1'))