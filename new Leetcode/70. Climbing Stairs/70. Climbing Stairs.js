/**
 * Created by sindhuhari on 1/25/18.
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [];
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    for(var i = 3 ; i <= n ; i++ ) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n]

};