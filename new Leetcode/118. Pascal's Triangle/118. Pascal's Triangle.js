/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    for(var i = 0; i < numRows; i++) {
        for(var j = 0; j <= i; j++) {
            result[i] = (result[i] || []);
            result[i].push(pascalValue(i , j))
        }
    }
    return result;
};

var pascalValue = function (n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
};

var factorial = function (number) {
    var value = 1;
    for(var i = number; i >= 1; i--) {
        value = value * i
    }
    return value;
};

console.log(generate(5));