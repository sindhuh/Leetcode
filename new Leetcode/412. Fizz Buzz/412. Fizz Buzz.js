/**
 * Created by sindhuhari on 2/5/18.
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 3 === 0) {
                result[i - 1] = (result[i-1] || "") + 'Fizz';
            }

            if (i % 5 === 0) {
                result[i - 1] = (result[i-1] || "") + 'Buzz';
            }
        } else {
            result.push("" + i)
        }
    }
    return result;
};

console.log(fizzBuzz(15))