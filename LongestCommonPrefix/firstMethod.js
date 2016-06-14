/**
 * Created by sindhuhari on 5/20/16.
 */
var array  =  ["aab", "ab" , "abaab" , "b", "baab"];
var final = longestCommonPrefix(array)
console.log("The longest common prefix string : " , final , " with length ", final.length);
function longestCommonPrefix(array) {
    var longestCommonPrefixString = "";
    var commonPrefixArray = [];
    var commonString = "";
    var j = 0;
    for (var i = 0 ; i < array.length - 1 ; i++) {
        commonString = "";
        j = i + 1;
        for(var k = 0; k < array[i].length + 1 ; k++) {
            if(array[i][k] == array[j][k]) {
                commonString = commonString + array[i][k];
            } else {
                if(commonString == "") {
                    break;
                }
                commonPrefixArray.push(commonString);
                break;
            }
        }
    }
    
    for (var l = 0; l < commonPrefixArray.length ; l ++) {
        if(commonPrefixArray[l].length > longestCommonPrefixString.length) {
            longestCommonPrefixString = commonPrefixArray[l];
        }
    }
    return longestCommonPrefixString;
}