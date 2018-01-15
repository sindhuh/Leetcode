var maximumSwap = function (num) {
    if (!num) {
        return num;
    }
    var stringNum = ("" + num).split("");
    var rightMax = []
    for (var i = 0; i < stringNum.length; i++) {
        var maximumNum = parseInt(stringNum[i]);
        for (var j = i + 1; j < stringNum.length; j++) {
            if (parseInt(stringNum[j]) >= maximumNum) {
                rightMax[i] = j;
                maximumNum = stringNum[j]
            }
        }
        if (!rightMax[i]) {
            rightMax[i] = -1;
        }
    }
    console.log(rightMax)
    for (var m = 0; m < rightMax.length; m++) {
        if(rightMax[m] !== -1 && parseInt(stringNum[m]) !== parseInt(stringNum[rightMax[m]])) {
            temp = stringNum[m];
            stringNum[m] = stringNum[rightMax[m]];
            stringNum[rightMax[m]] = temp;
            return parseInt(stringNum.join(""));
        }
    }

    return parseInt(stringNum.join(""));
};
console.log(maximumSwap(1993))