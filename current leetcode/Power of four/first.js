var isPowerOfFour = function(number) {
    if(number === 1) {
        return true;
    }
    if(number === 0) {
        return false;
    }
    while(number%4 === 0) {
        if(number === 4) {
            return true;
        } else {
            number = number/4
        }
    }
    return false
};
console.log(isPowerOfTwo(45))