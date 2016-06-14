/**
 * Created by sindhuhari on 5/20/16.
 */
var array  =  ["aab", "aab" , "aabaab" , "aab", "aabaab"];
var final = longestCommonPrefix(array);
console.log("The longest common prefix string : " , final , " with length ", final.length);
function longestCommonPrefix(array) {
    var final = "";
    var j = 0
    var commonString = array[0];
    for (var i = 0 ; i < array.length - 1 ; i++) {
        j = i + 1;
        for(var k = 0 ; k < commonString.length; k++) {
            if(commonString[k] == array[j][k]) {
                final = final + commonString[k];
            } else {
                commonString = final;
                final = "";
                break;
            }
            if(k+1 == commonString.length) {
                commonString = final;
                final = "";
            }
        }
    }
    return commonString;
}