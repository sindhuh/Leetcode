console.log(romanToInt("V"));
function romanToInt(string) {
    var result = 0;
    var index = 0;
    var romanNummerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    var numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    for(var i = 0 ; i < string.length ; i++) {
        index = romanNummerals.indexOf(string[i] + string[i + 1]);
        if(index > -1) {
           result = result + numbers[index];
           i = i + 1;
        } else {
            result  = result + numbers[romanNummerals.indexOf(string[i])];
        }
    }
    return result;
}