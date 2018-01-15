/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var binaryString = n.toString(2);
    var result = true;
    var bit = binaryString[0];
    for(var i = 1 ; i < binaryString.length; i++) {
        if(bit === binaryString[i]) {
            return false;
        } else {
            bit = binaryString[i]
        }
    }
    return result;
};

console.log(hasAlternatingBits(10))