var string = "      -11919730356x";
console.log(myAtoi(string));
function myAtoi(string) {
    string = string.trim();
    var sign = "";
    if(string[0] == "+") {
        string = string.slice(1);
        return getResult(string);
    } else if(string[0] == "-") {
        string = string.slice(1);
        sign = "-";
        var negativeResult = getResult(string, sign);
        if(negativeResult == 0) {
            return 0;
        }
        return negativeResult;
    } else {
        return getResult(string, sign);
    }
}
function getResult(str, sign) {
    console.log(str)
    var result = 0;
    var asciiValueOfZero = "0".charCodeAt(0);
    var value = 0;
    var maxNegInt = -Math.pow(2,31);
    var maxInt = Math.pow(2,31) - 1;
    for(var i = 0 ; i < str.length ; i ++) {
            if(isNaN(str[i]) || str[i] == " ") {
                break;
            }
        value = str.charCodeAt(i);
        value = value - asciiValueOfZero;
        result = result * 10 + value;
    }
    if(sign == "-") {
        result = -Math.abs(result);
    }
    console.log(result)
    if(result > maxInt) {
        return maxInt;
    }
    if(result < maxNegInt) {
        return maxNegInt;
    }
    return result;
}
