/**
 * Created by sindhuhari on 2/7/18.
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    var count = 0;
    if (n < 2) {
        return 0;
    }
    if (n > 2) {
       count =  1;
    }

    for (var i = 3; i < n; i+=2) {
        if (isPrime(i)) {
            count = count + 1;
        }
    }
    return count;

};


var isPrime = function (number) {
    for (var i = 3; i * i <= number; i+=2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(countPrimes(499979))