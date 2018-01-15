var countAndSay = function(n) {
    if(n <= 0) {
        return null;
    }
    var result = '1';
    for(var i = 1 ; i < n; i++) {
        var newString = "";
        var count = 1;
        for(var j = 1 ; j  < result.length; j++) {
            if(result[j] === result[j-1]) {
                count = count + 1;
            } else {
                newString = newString + count;
                newString = newString + result[j - 1];
                count = 1;
            }

        }
        newString = newString + count;
        newString = newString + result[result.length - 1]
        result = newString;
    }
    return result;
};
console.log(countAndSay(5))