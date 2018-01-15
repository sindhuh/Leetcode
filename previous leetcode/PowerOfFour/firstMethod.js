console.log(isPowerOfFour(81));
function isPowerOfFour(number) {
    if(number == 1) {
        return true;
    }
    if(number == 0) {
        return false;
    }
    while (number % 4 == 0) {
        number = number / 4;;
        if(number == 1) {
            return true;
        }
        console.log(number);
    }
    return false;
}
