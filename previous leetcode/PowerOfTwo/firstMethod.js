console.log(isPowerOfTwo(64))
function isPowerOfTwo(number) {
    if(number == 1) {
        return true;
    }
    if(number == 0) {
        return false
    }
    while (number % 2 == 0) {
        if(number == 2) {
            return true;
        }
        number = number / 2;;
    }
    return false;
}
