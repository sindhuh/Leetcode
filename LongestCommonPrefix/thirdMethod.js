/**
 * Created by sindhuhari on 5/20/16.
 */
var array  =  ["aab", "aab" , "aabaab" , "aab", "aabaab"];
var final = longestCommonPrefix(array);
console.log("The longest common prefix string : " , final , " with length ", final.length);
function longestCommonPrefix(array) {
    var commonString = array[0];
    for (var i = 0 ; i < array.length - 1 ; i++) {
        commonString = getCommonString(commonString, array[i + 1 ]);
    }
    return commonString;
}

function getCommonString(string1, string2) {
    var commonString = "";
    var minLength = Math.min(string1.length, string2.length);
    for(var k = 0 ; k < minLength; k++) {
        if(string1[k] == string2[k]) {
            commonString = commonString + string1[k];
        } else {
            return commonString;
        }
    }
    return commonString;
}