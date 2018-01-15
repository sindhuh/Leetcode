var string1 = "2147483648";
var string2 = "232";
console.log(MultiplyStrings(string1 , string2));

function MultiplyStrings(string1, string2) {
    var num1 = stringToInteger(string1);
    var num2 = stringToInteger(string2);
    var integerResult = num1 * num2;
    console.log(integerResult);
    integerResult = integerResult + "" ;
    return integerResult;
}
function stringToInteger(string) {
    var sum = 0;
    var zeroAsciiCode= '0'.charCodeAt(0);
    for (var i = 0; i < string.length; i++) {
        sum = (sum * 10) + (string.charCodeAt(i) - zeroAsciiCode);
    }
    return sum;
}

