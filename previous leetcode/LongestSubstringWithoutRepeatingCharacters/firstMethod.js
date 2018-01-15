// Find longest substring without Repeating Characters

var string = "abcdef";
var output = [];
longestSubstring(string);
var largestStringLength = getLargestLengthString();
console.log("largest string length : ", largestStringLength);

longestSubstring = function (string) {
    var substring = "";
    for (var i = 0; i < string.length; i++) {
        substring = "";
        for (var j = i; j < string.length; j++) {
            if (substring.indexOf(string[j]) == -1) {
                substring = substring + string[j];
            } else {
                break;
            }

        }
        output.push(substring);
    }
}

getLargestLengthString = function () {
    var largest = "";
    for (var i = 0; i < output.length; i++) {
        if (output[i].length > largest.length) {
            largest = output[i];
        }
    }
    return largest.length;
}

