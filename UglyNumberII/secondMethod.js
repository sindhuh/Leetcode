console.log(nthUglyNumber(7))
function nthUglyNumber(n) {
    var twoMultiple = 0;
    var threeMultliple = 0;
    var fiveMultiple = 0;
    var currentNumber = 0;
    var index1 = 0, index2 = 0, index3 = 0;
    var result = [];
    result.push(1);
    for(var i = 1 ; i < n;) {
        twoMultiple = result[index1] * 2;
        threeMultliple = result[index2] * 3;
        fiveMultiple = result[index3] * 5;
        currentNumber = Math.min(twoMultiple, threeMultliple, fiveMultiple);
        if(currentNumber == twoMultiple) {
            index1 = index1 + 1;
        } else if(currentNumber == threeMultliple) {
            index2 = index2 + 1;
        } else {
            index3 = index3 + 1;
        }
        if(currentNumber != result[i - 1]) {
            result.push(currentNumber);
            i = i + 1;
        }
    }
    console.log(result)
    return result.pop();
}