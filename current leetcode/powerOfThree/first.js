var isPowerOfThree = function(number) {
    if(number === 1) {
        return true;
    }
    if(number === 0) {
        return false;
    }
    while(number%3 === 0) {
        if(number === 3) {
            return true;
        } else {
            number = number/3
        }
    }

    return false
};
console.log(isPowerOfTwo(45))