
// Implement strStr() function

var string = "bbbbababbbaabbba";
var substring = "abb";

console.log(strStr(string, substring));
function strStr(string, substring) {
    return getStrStr(string, substring);
}


function getStrStr(string, substring) {
    if(substring.length > string.length) {
        return -1;
    }

    if(substring.length == 0 || string.length == 0) {
        return 0;
    }
    if(string == substring) {
        return 0;
    }
    for(var i = 0 ; i <= string.length - substring.length ; i ++ ) {
        if(string.substring(i, i+substring.length) == substring) {
            return i
        }
    }
        return -1;
}