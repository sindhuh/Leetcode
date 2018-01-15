
var romanToInt = function(romanNumber) {
    var mapping = {
        'I' : 1,
        'V': 5,
        'X' : 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var result = 0;
    for(var i = 0 ; i < romanNumber.length; i++) {
        var num1 = mapping[romanNumber[i]];
        if(i < romanNumber.length - 1) {
            var num2 = mapping[romanNumber[i + 1]];
            if(num1 >= num2) {
                result = result + num1;
            } else {
                result = result + num2 - num1;
                i = i + 1;
            }
        } else {
            result = result + num1;
        }
    }
    return result;

};
console.log(romanToInt('DCXXI'));