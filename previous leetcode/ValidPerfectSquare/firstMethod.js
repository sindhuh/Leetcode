console.log(isPerfectSquare(24))
function isPerfectSquare(number) {
    for(var i = 0 ; i * i <= number ; i++) {
        if(i * i == number) {
            return true;
        }
    }
    return false;
}