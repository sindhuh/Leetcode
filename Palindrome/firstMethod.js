

var number = 1631551361;

console.log(isPalindrome(number))
function isPalindrome(number) {
    if (number < 0) {
        number = Math.abs(number);
        return reverseInteger(number);
    } else {
        return reverseInteger(number);
    }
}

function reverseInteger(number) {
    var stringNum = "" + number;
    var start = 0;
    var end = stringNum.length - 1;
    var mid = (start + end ) / 2;
   for(var i = 0 ; i < stringNum.length ; i++) {
       console.log(stringNum[start], stringNum[end], start, end);
       if(start >= mid) {
           return true
       }
       if(stringNum[start] == stringNum[end]) {
           start = start + 1;
           end =  end - 1;
       } else {
           return false
       }
   }
    return true;
}