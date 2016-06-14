var string1 = "11111111111";
var string2 = "11111111111";
console.log("final result :" , multiplyStrings(string1, string2));
function multiplyStrings(string1, string2) {
    var array1 = string1.split("").reverse();
    var array2 = string2.split("").reverse();
    var result = [];
    var carry = 0;
    var total = 0;
    var remainValue = 0;

    for(var i = 0 ; i < array1.length ; i ++) {
        var num1 = parseInt(array1[i]);
        for(var j = 0; j < array2.length ; j ++) {
            var num2 = parseInt(array2[j]);
            if(result[i+j] == undefined) {
                total = num1 * num2 + carry;
            } else {
                total = num1 * num2 + carry + result[i + j];
            }
            remainValue = total % 10;
            carry = parseInt(total / 10);
            result[i + j] = remainValue;
        }
        if(carry > 0){
            result[i + j] = carry;
        }
        carry = 0;
    }
    return result.reverse().join("");
}
