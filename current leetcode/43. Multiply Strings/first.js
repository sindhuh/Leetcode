var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0") {
        return "0"
    }
    var result = [];
    var array1 = num1.split("").reverse();
    var array2 = num2.split("").reverse();
    var carry = 0;
    var  total = 0;
    for(var i = 0 ; i < array1.length ; i++) {
        for (var j = 0; j < array2.length; j++) {
            if(result[i + j]) {
                total = parseInt(array1[i]) * parseInt(array2[j]) + carry + result[i + j];
            } else {
                total = parseInt(array1[i]) * parseInt(array2[j]) + carry;
            }
            carry = parseInt(total / 10);
            result[i + j] = total % 10;
        }
        if(carry > 0) {
            result[i + j] = carry;
        }
        carry = 0;
    }

    return result.reverse().join("")
};