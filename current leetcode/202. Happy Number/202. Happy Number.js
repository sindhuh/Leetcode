/**
 * Created by sindhuhari on 2/2/18.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (!number) {
        return false;
    }
    var map = {}
    while (!map[n]) {
        if (value === 1) {
            return true;
        }
        map[n] = true;
        n = numberAfterSquare(n)
    }
    return false;
};


var numberAfterSquare = function (n) {
    var value = 0;
    var digit = 0;
    while (n !== 0) {
        digit = n % 10;
        n = parseInt(n / 10);
        value = value + digit * digit
    }
    return value
};