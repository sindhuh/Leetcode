/**
 * Created by sindhuhari on 6/17/16.
 */
console.log(mySqrt(43))
function mySqrt(num) {
    var i = 0;
    while (true) {
        if(i * i == num) {
            return i;
        } else if((i * i) > num) {
            return i - 1;
        }
        i = i + 1;
    }
}