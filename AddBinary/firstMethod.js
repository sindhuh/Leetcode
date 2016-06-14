var a = "111";
var b = "100";
addBinary(a, b)
function addBinary(a, b) {
    var num1 = 0;
    var num2 = 0;
    var carry = 0;
    var result = [];
    var tempSum = 0;
    var lengthOfA = a.length;
    var lengthOfB = b.length;
    var maxLength = Math.max(lengthOfA, lengthOfB);
    for(var i = 0; i < maxLength; i++) {
        if(a[a.length - 1 - i] == undefined) {
            num1 = 0;
        } else {
            num1 = parseInt(a[a.length - 1 - i]);
        }
        if(b[b.length - 1 - i] == undefined) {
            num2 = 0;
        } else {
            num2 = parseInt(b[b.length - 1 - i]);
        }
        console.log(">>>>> " +num1 + " >>>>>" +num2);
        tempSum = num1 + num2 + carry;
        console.log(tempSum , tempSum%2)
        result = result + tempSum % 2;
        carry = parseInt(tempSum/2);
    }
    if(carry == 1) {
        result = result + carry;
    }
    result = result.split("").reverse().join("");
    return result;
}