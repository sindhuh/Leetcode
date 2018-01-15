// Find longest substring without Repeating Characters
var string = "sbcdeffffff";
var largestStringLength = longestSubstringLength(string);
console.log("largest string length : ", largestStringLength);

    function longestSubstringLength(string) {
        var largestSubstringLength = 0;
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
            if(substring.length > largestSubstringLength) {
                largestSubstringLength = substring.length;
            }
        }
        return largestSubstringLength;
    }

