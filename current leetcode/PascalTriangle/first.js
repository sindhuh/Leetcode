var generate = function (numRows) {
    if(!numRows || numRows === 0) {
        return [];
    }
    var result = [];
    var value = 0 ;
    for (var i = 0; i < numRows; i++) {
        var set = [];
        for (var j = 0; j <= i; j++) {
            value = getFactorial(i) / (getFactorial(j) * getFactorial(i - j));
            set.push(value);
        }
        result.push(set)
    }
    return result;
};

var getFactorial = function (num) {
    if (num === 0) {
        return 1
    }
    var fact = 1;
    for (var k = 1; k <= num; k++) {
        fact = fact * k
    }
    return fact;
};

console.log(generate(1))