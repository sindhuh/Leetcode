/**
 * Created by sindhuhari on 2/5/18.
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var getSum = function(a, b) {
    var sum = a ^ b;
    var carry = a & b;
    if(carry === 0) {
        return sum;
    } else {
        getSum(sum, carry << 1)
    }
};