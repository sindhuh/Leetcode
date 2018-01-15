/**
 * Created by sindhuhari on 6/16/16.
 */
console.log(countBits(5));
function countBits(num) {
    var result = [];
    var powerOfTwo = 2;
    result[0]  = 0;
    result[1] =  1;
    for(var i = 1 ;i <= num ; i ++) {
        if(isPowerOfTwo(i)) {
            result[i] = 1;
        } else {
            console.log(powerOfTwo, result[powerOfTwo] , result[i - powerOfTwo]);
            result[i] = result[powerOfTwo] + result[powerOfTwo - i];
        }
    }
    return result;
}

function isPowerOfTwo(number) {
    if(number == 1) {
        return true;
    }
    if(number == 0) {
        return false
    }
    while (number % 2 == 0) {
        if(number == 2) {
            return true;
        }
        number = number / 2;;
    }
    return false;
}
