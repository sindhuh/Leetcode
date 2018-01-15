var judgeSquareSum = function(c) {
    var b = 0;
    var loop = parseInt(Math.sqrt(c))
    for(var i = 0; i <= loop; i++) {
        var value = c -(i*i);
        var a = Math.sqrt(value);
        if(a % 1 === 0) {
            b = i;
            if((a*a) + (b*b) === c) {
                console.log(a, b);
                return true;
            }
        }
    }
    return false
};

console.log(judgeSquareSum(999999999));