console.log(isPowerOfThree(81));
function isPowerOfThree(number) {
    if(number == 1) {
        return true;
    }
    if(number == 0) {
        return false;
    }
    while (number % 3 == 0) {
        number = number / 3;;
        if(number == 1) {
            return true;
        }
        console.log(number);
    }
    return false;
}
