var lengthOfLastWord = function(s) {
    if(!s || s.length === 0) {
        return 0
    }
    var length = 0;
    for(var i = 0; i < s.length; i++) {
        var previousChar = s[i - 1];
        if(s[i] !== " ") {
            if(previousChar === " ") {
                length = 1
            } else {
                length = length + 1
            }
        }
    }
    return length;
};
console.log(lengthOfLastWord(" "))