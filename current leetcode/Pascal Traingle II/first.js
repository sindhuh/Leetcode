var generate = function (rowIndex) {
    var value = 0 ;
    var set = [];
    for (var j = 0; j <= rowIndex; j++) {
        value = getFactorial(rowIndex) / (getFactorial(j) * getFactorial(rowIndex - j));
        set.push(value);
    }

    return set;
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

console.log(generate(0))