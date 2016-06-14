var number = 123;
var reverseNumber

function reverseInteger(number) {
    if (number == 0) {
        console.log("revrse number : " + reverseNumber);
        return reverseNumber;
    }
    modValue = number % 10;
    reverseNumber = "" + reverseNumber + modValue;
    remainNumber = parseInt(number / 10);
    second(remainNumber);
}

function reverseNumber(modValue) {
    reverseNumber = reverseNumber.toString() + modValue.toString();
    reverseInteger()
}
function second(number) {
    var modValue = 0;
    var remainNumber = 0;
    modValue = number % 10;
    remainNumber = parseInt(number / 10);
    reverseInteger(remainNumber);
}



