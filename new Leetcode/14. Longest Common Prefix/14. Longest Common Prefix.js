var longestCommonPrefix = function(strs) {
    if(!strs || strs.length === 0) {
        return ""
    }
    var commonPrefix = strs[0];
    for (var i = 0 ; i < strs.length - 1 ; i++) {
       commonPrefix = compareStrings(commonPrefix, strs[i + 1])
    }

    return commonPrefix;
};

var compareStrings = function (str1, str2) {
    var commonString = "";
    var minStringLength = Math.min(str1.length, str2.length);
    for(var i = 0 ; i < minStringLength; i++) {
        if(str1[i] === str2[i]) {
            commonString = commonString + str1[i];
        } else {
            break;
        }
    }
    return commonString
};

console.log(longestCommonPrefix(['abcdew', 'abcd', 'abc']))