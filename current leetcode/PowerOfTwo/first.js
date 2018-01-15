var isPowerOfTwo = function(number) {
    if(number === 1) {
        return true;
    }
    if(number === 0) {
        return false;
    }
    while(number%2 === 0) {
        if(number === 2) {
            return true;
        } else {
            number = number/2
        }
    }

    return false
};
console.log(isPowerOfTwo(45))