var isPalindrome = function (s) {
    if(!s) {
        return true;
    }
    if(s === "" || s.length === 0) {
        return true
    }
    var newString = "";
    for (var i = 0; i < s.length; i++) {
        if (isAlphabetNumeric(s[i])) {
            newString = newString + s[i];
        }

    }
    console.log(newString.split("").reverse().join("").toLowerCase(), newString.toLowerCase());
    return newString.split("").reverse().join("").toLowerCase() === newString.toLowerCase();
};


function isAlphabetNumeric(char) {
    return /[a-z]/.test(char) || /[0-9]/.test(char) || /[A-Z]/.test(char);
}

console.log(isPalindrome("Ab"));