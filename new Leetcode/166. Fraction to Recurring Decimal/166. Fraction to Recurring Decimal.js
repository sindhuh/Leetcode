/**
 * Created by sindhuhari on 2/2/18.
 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) {
        return "0";
    }

    var result = "";
    if (numerator < 0 ^ denominator < 0) {
        result = result + '-'
    }

    var fraction = parseInt(numerator / denominator);
    result = result + fraction;
    var reminder = numerator % denominator;
    if (reminder === 0) {
        return result;
    } else {
        result = result + '.';
    }
    var map = {};
    var i = 0;
    while(reminder != 0) {
        if(map[reminder] !== undefined) {
            result[result.length - 1] = '(';
            result = result + reminder + ')'
            break;
        }
        numerator = reminder * 10;
        result = result + parseInt(numerator/denominator);
        reminder = numerator % denominator;
        map[reminder] = i;
        i = i + 1;
    }
    return result;
};

console.log(fractionToDecimal(1, 6))