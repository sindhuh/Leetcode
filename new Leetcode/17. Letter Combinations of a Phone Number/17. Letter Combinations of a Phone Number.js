var letterCombinations = function(digits) {
    var mapping = {};
    mapping[0] = "";
    mapping[1] = "";
    mapping[2] = "abc";
    mapping[3] = "def";
    mapping[4] = "ghi";
    mapping[5] = "jkl";
    mapping[6] = "mno";
    mapping[7] = "pqrs";
    mapping[8] = "tuv";
    mapping[9] = "wxyz";

    var result = [];
    var temp = [];


    if(digits === null || digits.length === 0) {
        return result;
    }

    if(digits.length === 1) {
        if(digits.length === "1" || digits.length === "0" ) {
            return result;
        }
    }

    getStrings(digits, temp, result, mapping)
    return result;

};

var getStrings = function(digits, temp, result, mapping) {
    if(digits.length === 0) {
        result.push(temp.join(''));
        return;
    }

    var number = parseInt(digits.substring(0,1))
    var letters = mapping[number];
    console.log(letters, digits.substring(1))
    for(var i = 0; i<letters.length; i++) {
        temp.push(letters[i]);
        console.log(temp)
        getStrings(digits.substring(1), temp, result, mapping);
        temp.pop();
    }

};

