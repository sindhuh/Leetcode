function isPalindrome(number) {
    if(number < 0) {
        return reverseInteger(Math.abs(number))
    } else {
        return reverseInteger(number);
    }
}

function reverseInteger(number) {
    var stringNum = "" + number;
    var start = 0;
    var end = stringNum.length - 1;
    var mid = (start + end ) / 2;
    for(var i = 0 ; i < stringNum.length; i++) {
        if(start === mid) {
            return true;
        }
        if(stringNum[start] === stringNum[end]) {
            start = start + 1;
            end = end - 1
        } else {
            return false;
        }
    }
    return true
}

console.log(isPalindrome(-2147447412))