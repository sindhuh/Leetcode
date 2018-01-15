function stringToInteger(s) {
    if (!s || s.length <= 0) {
        return 0;
    }
    var string = s.trim();
    var isNegative = false;
    var result = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === '-' && i === 0) {
            isNegative = true;
        } else if (string[i] === '+' && i === 0) {

        } else if (string[i] >= '0' && string[i] <= '9') {
            result = (result * 10) + (string[i] - '0')
        } else {
            if (isNegative) {
                if (isMaxMinExceeded(result)) {
                    return -2147483648;
                }
                return -Math.abs(result);
            } else {
                if (isMaxMinExceeded(result)) {
                    return 2147483647;
                }
                return result;
            }
        }
    }
    if (isNegative) {
        if (isMaxMinExceeded(result)) {
            return -2147483648;
        }
        return -Math.abs(result);
    } else {
        if (isMaxMinExceeded(result)) {
            return 2147483647;
        }
        return result;
    }
}

function isMaxMinExceeded(number) {
    if (number > 2147483647 || number < -2147483647) {
        return true;
    }
    return false
}

console.log(stringToInteger(''))