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