var addBinary = function(a, b) {
    var result = "";
    var carry = 0;
    var num1, num2;
    var tempSum = 0;
    var size = Math.max(a.length, b.length);
    for(var i = 0 ; i < size; i++) {
        if(a[i]) {
            num1 = parseInt(a[a.length - 1- i])
        } else {
            num1 = 0;
        }

        if(b[i]) {
            num2 = parseInt(b[b.length - 1 - i])
        } else {
            num2 = 0;
        }
        tempSum = num1 + num2 + carry;
        result = result + (tempSum % 2);
        carry = parseInt(tempSum/2)
    }
    if(carry === 1) {
        result = result + carry;
    }
    return result.split("").reverse().join("");
};

console.log(addBinary("11", "1"));