var longestCommonPrefix = function(strs) {
    if(!strs || strs.length <= 0) {
      return;
    }
    var longString = strs[0];
    for(var i = 0 ; i < strs.length - 1; i++) {
        longString = compareStrings(longString, strs[i + 1]);
    }
    return longString;
};

var compareStrings = function(str1, str2) {
    var currentLongString = "";
    var smallString = "";
    if((str1.length >= str2.length)) {
        smallString = str2;
    } else {
        smallString = str1;
    }

    for(var j = 0; j < smallString.length ; j++) {
        if(str1[j] === str2[j]) {
            currentLongString = currentLongString + str1[j]
        } else {
            return currentLongString;
        }
    }
    return currentLongString;
};

console.log(longestCommonPrefix(['abcdef', 'abcde', 'abcd', 'abc']))