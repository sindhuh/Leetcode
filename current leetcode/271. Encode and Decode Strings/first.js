var encode = function (strs) {
    if (!strs || strs.length === 0) {
        return "";
    }
    var endcodedString = "";
    for (var i = 0; i < strs.length; i++) {
        if (strs[i]) {
            endcodedString = endcodedString + strs[i].length + '#' + strs[i];
        } else if (strs[i] === "") {
            endcodedString = endcodedString + '$#';
        } else if (strs[i] === null) {
            endcodedString = endcodedString + '&#';
        }
    }
    decode(endcodedString);
    return endcodedString;

};

var decode = function (string) {
    console.log(string)
    var strs = [];
    var decodeString;
    var i = 0;
    while (i < string.length) {
        if (string[i] === '$') {
            i = i + 2;
            strs.push("")
        } else if (string[i] === '&') {
            i = i + 2;
            strs.push(null);
        } else {
            var startIndex = i;
            var length = "";
            while (!isNaN(parseInt(string[i]))) {
               length = length +  string[i]
                i = i + 1;
            }
            console.log(length);
            decodeString = string.substring(startIndex + length.length + 1 , parseInt(length) + startIndex + length.length + 1 );
            i = startIndex;
            i = parseInt(length) + startIndex + length.length + 1;
            strs.push(decodeString);
        }
    }
    console.log('decode', strs)
    return strs;
};


