console.log(intToRoman(4999));
function intToRoman(num) {
    if(num > 4999) {
        return null;
    }
    var count = 0;
    var result = "";
    var romanNummerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    var numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    for(var i = numbers.length - 1 ; i >= 0 ; i--) {
        if(num >= numbers[i]) {
            count = parseInt(num / numbers[i]);
            num = num % numbers[i];
            for(var j = 0 ; j < count ; j++) {
               result = result + romanNummerals[i];
            }
        }
    }
    return result;
}
