
console.log(partition("wow"));
function partition(string) {
    var result = [];
    var array = [];
    result.push(string.split(""));
    for(var i = 0 ; i < string.length ;  i++) {
        for(var j = 1; j < string.length ; j++) {
            console.log(string.substring(i, j + 1));
            if(isPalindrome(string.substring(i , j + 1))) {
                array.push(string.substring(i, j + 1));
            }
        }
        result.push(array);
        array = [];
    }
    return result;
}


function isPalindrome(string) {
    if(string.length == 0 ) {
        return false;
    }
    return string == string.split("").reverse().join("");
}
