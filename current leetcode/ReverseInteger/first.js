function reverseInterger(number) {
    var stringNumber = JSON.stringify(number);
    var result = "";
    for (var i = stringNumber.length - 1; i >= 0; i--) {
        console.log(stringNumber[i])
        if(stringNumber[i] === '-') {
            result = stringNumber[i] + result
        } else {
            result = result + stringNumber[i];
        }
    }
    if (parseInt(result, 10) > 2147483647 || parseInt(result, 10) < -2147483647 ) {
        return 0;
    }
    return parseInt(result);
}

console.log(reverseInterger(-123));