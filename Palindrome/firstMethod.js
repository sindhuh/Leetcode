

var number = -121;
var reverseNumber = "";
var remainNumber = "";
var modValue = 0;

if(number < 0) {
    number = Math.abs(number);
    //  reverseNumber = "-";
    reverseInteger(number)
} else {
    reverseInteger(number);
}

function reverseInteger(number) {
    if(number == 0) {
        if(isPalindrome(reverseNumber)) {
            console.log("The  number is palindrome");
            return;
        } else {
            console.log("The  number is not palindrome");
            return;
        }
    }
    modValue = number % 10;
    reverseNumber = "" + reverseNumber + modValue;
    remainNumber = parseInt(number / 10);
    reverseInteger(remainNumber);
}

function isPalindrome(reversedNumber) {
    console.log(number);
    console.log(reversedNumber);
    return parseInt(number )== parseInt(reversedNumber);
}