console.log(nthUglyNumber(1352));
function nthUglyNumber(n) {
    var array = [];
    var i = 1;
    var count = 0;
    while (true) {
        if(isUgly(i)) {
             count = count + 1;
            array.push(i);
        }
        if(count == n) {
            console.log(array)
            return i;
        }
        i++;
    }
}

function isUgly(number) {
    if(number <= 0) {
        return false;
    }
    while(number % 2 == 0) {
        number = number / 2;
    }
    while(number % 3 == 0) {
        number = number / 3;
    }
    while (number % 5 == 0) {
        number = number / 5;
    }
    return number == 1;
}