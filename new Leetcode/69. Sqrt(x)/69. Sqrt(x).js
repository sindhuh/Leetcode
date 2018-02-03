/**
 * Created by sindhuhari on 1/25/18.
 */


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var  i = 0;
    while (true) {
        if(i * i === x) {
            return i;
        } else if(i*i > x) {
            return i  - 1;
        } else  {
            i  = i + 1;
        }
    }
};