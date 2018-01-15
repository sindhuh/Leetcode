var isHappy = function(n) {
    var mapping = {}
    var stringNum = "" +n;
    while(true) {
        var sum = 0;
        for(var i = 0 ; i < stringNum.length; i++) {
            sum = sum + (parseInt(stringNum[i]) * parseInt(stringNum[i]));
        }
        if(sum === 1) {
            return true
        } else {
            if(mapping[stringNum]) {
                return false;
            } else {
                mapping[stringNum] = "visited";
                stringNum = "" + sum
            }
        }
    }

};

console.log(isHappy(19))