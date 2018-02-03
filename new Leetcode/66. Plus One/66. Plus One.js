/**
 * Created by sindhuhari on 1/25/18.
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne;
plusOne = function (digits) {
    var number = parseInt(digits.join(""));
    var m = 1;
    while ((number & m) == 1) {
        number = number ^ m;
        m <<= 1;
    }
    number = number ^ m;
    return number;
};

console.log(plusOne([1,3]))