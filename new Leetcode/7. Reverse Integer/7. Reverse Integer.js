/**
 * Created by sindhuhari on 1/20/18.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNegative = false;
    if(x < 0) {
        isNegative = true;
    }
    x = Math.abs(x);
    x = JSON.stringify(x);
    var result = '';
    for(var i = x.length - 1 ; i >= 0 ; i--) {
        result = result + x[i]
    }

    if (parseInt(result, 10) > 2147483647 || parseInt(result, 10) < -2147483647 ) {
        return 0;
    }
    if(isNegative) {
        return -parseInt(result)
    } else {
        return parseInt(result)
    }
};