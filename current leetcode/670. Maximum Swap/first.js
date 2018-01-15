/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    if (!num) {
        return num;
    }
    var stringNum = ("" + num).split("");
    if (stringNum.length === 0) {
        return num;
    }
    for (var i = 0; i < stringNum.length; i++) {
        var checkNum = parseInt(stringNum[i]);
        var maximumInt = parseInt(stringNum[i]);
        for (var j = i + 1; j < stringNum.length; j++) {
            if (parseInt(stringNum[j]) > maximumInt) {
                var maxIndex = j;
                maximumInt = parseInt(stringNum[j])
            }
        }
        if (checkNum < maximumInt) {
            stringNum[maxIndex] = stringNum[i];
            stringNum[i] = maximumInt;
            var maxNumber = parseInt(stringNum.join(""))
        }
    }
    if (maxNumber) {
        return maxNumber
    } else {
        return num;
    }
};

console.log(maximumSwap(1993));