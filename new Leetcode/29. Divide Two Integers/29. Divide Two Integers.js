/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {

    if(divisor === 0) {
        return 2147483647;
    }

    if(divisor === -1 && dividend === -2147483648) {
        return 2147483647;
    }

    if(divisor === 1 && dividend === -2147483648) {
        return -2147483647;
    }

    if(divisor === -1 && dividend === 2147483648) {
        return -2147483647;
    }

    if(divisor === 1 && dividend === 2147483648) {
        return 2147483647;
    }


    var shifts = 0;
    var result = 0;
    var positiveDividend = Math.abs(dividend);
    var positiveDivisor = Math.abs(divisor);
    while (positiveDividend >= positiveDivisor) {
        shifts = 0;
        while (positiveDividend >= (positiveDivisor << shifts)) {
            shifts = shifts + 1;
        }
        result = result + (1 << (shifts - 1));
        positiveDividend = positiveDividend - (positiveDivisor << (shifts - 1));
    }
    if((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ){
        return result;
    } else {
        return -result;
    }
};

console.log(divide(2147483647, 2))