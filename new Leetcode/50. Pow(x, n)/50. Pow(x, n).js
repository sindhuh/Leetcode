/**
 * Created by sindhuhari on 1/18/18.
 */
var myPow = function(x, n) {
    if(n === 1) {
        return x;
    }

    if(n < 0) {
        x = 1/x;
    }

    return logNPOW(x, n)
};

var logNPOW = function (x, n) {
    console.log(n)
    if(n === 0) {
        return 1;
    }
    var temp = logNPOW(x, parseInt(n/2));

    if(n % 2 === 0) {
        return temp * temp;
    } else {
        return temp * temp * x;
    }
};

console.log(myPow(2, 10))