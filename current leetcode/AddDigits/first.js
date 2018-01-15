var addDigits = function(num) {
    var stringNum = "" + num;
    while (true) {
        if(stringNum.length === 1) {
            return parseInt(stringNum)
        }
        var sum = 0;
        for(var i = 0; i < stringNum.length; i++) {
            sum = sum + parseInt(stringNum[i]);
        }
        stringNum = "" +sum;
        if(stringNum.length === 1) {
            return parseInt(stringNum)
        }
    }
};
console.log(addDigits(38))