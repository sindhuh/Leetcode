
// Implement strStr() function

var string = "Hello world, welcome to the universe.";
var substring = "welcome";
var foundAt = getStrStr(string, substring);
if(foundAt == -1) {
    console.log("No string found");
} else {
    console.log("String found at : ", foundAt);
}

function getStrStr(string, substring) {
    var foundAtIndex = 0;
    var j = 0;
    if(substring.length == 0 || string.length == 0 || substring.length > string.length) {
        return 0;
    }

    for(var i = 0 ; i < string.length; i ++) {
        if (string[i] == substring[j]) {
            j = j + 1;
        } else {
            j = 0;
        }
        if (substring.length == j) {
            foundAtIndex = i - (substring.length - 1);
            return foundAtIndex;
        }
    }
    return -1;
}