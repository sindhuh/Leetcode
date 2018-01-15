var strStr = function (haystack, needle) {
    if(haystack === needle) {
        return 0
    }
    if(needle.length === 0 && haystack.length > 0) {
        return 0;
    }
    if(!needle || !haystack) {
        return -1;
    }
    if(needle.length > haystack.length) {
        return -1
    }
    var result = -1;
    var j = 0;
    for (var i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[j]) {
            if(j === 0) {
                result = i;
            }
            if(j === needle.length - 1) {
                return result
            }
            j = j + 1;
        } else {
            j = 0;
        }
    }
    if(j >= needle.length) {
        return result
    } else {
        result = -1;
        return result
    }
};

console.log(strStr("mississippi" , "issip"));