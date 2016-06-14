/**
 * @param {number[]} digits
 * @return {number[]}
 */
var digits = [-1];
console.log(plusOne(digits));
function plusOne(digits) {
    var carrry  = 1;
    for(var i = digits.length - 1 ; i >= 0; i --) {
        digits[i] = digits[i] + carrry;
        if(digits[i] == 10) {
            digits[i] = 0;
            carrry = 1;
        } else {
            carrry = 0;
        }
    }
    if (carrry == 1) {
        digits.unshift(carrry);
    }
    return digits;
}