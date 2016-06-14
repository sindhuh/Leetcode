var dividend = 45;
var divisor = 5;
var final = divideTwoInts(dividend, divisor);
if(final == -1) {
    console.log("undefined");
} else {
    console.log(final);
}
function divideTwoInts(dividend, divisor) {
    var min = 0;
    var max = dividend;
    var temp = 0;
    var middle = parseInt(min + max / 2);
    if(divisor == 0) {
        return Number.POSITIVE_INFINITY;
    }
    if (dividend == 0) {
        return 0;
    }
    if(divisor == 0 && dividend == 0) {
        return -1;
    }

    while (min <= max) {
        for(var i = 0; i < divisor ; i++) {
            temp = temp + middle;
        }
        if (temp > dividend) {
            max = middle - 1;
        }
        else if (temp == dividend) {
            return middle;
        } else {
            min = middle + 1;
        }
        middle = parseInt((min + max) / 2);
        temp = 0;
    }
    if (min > max) {
        return middle;
    }
}