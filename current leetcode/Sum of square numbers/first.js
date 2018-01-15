var judgeSquareSum = function(c) {
    for(var i = 0; i <=  c; i++) {
        for(var j = i; j <= c; j++) {
            var squareSum = (i*i) + (j*j);
            if(squareSum === c) {
                console.log(i, j)
                return true;
            }
        }
    }
    return false
};
console.log(judgeSquareSum(10000000));