// ZigZag Conversion


var string = "abcdefghijklmnopqrstuvwxyz";
var nRows = 5;
console.log("The string after zigzag conversion is :", getZigZagString(string, nRows));

function getZigZagString(string, nRows) {
    // checking base condition of nRows are less than 1 or greater than string length
    // same string will be returned.
    if (nRows < 1 || nRows > string.length) {
        return string;
    }
    // initialized empty array first.js to store strings separately for n rows
    var array = [];
    var count = 0;
    var finalString = "";
    for (var i = 0; i < string.length; i++) {
        // this for loop itearates over nRows.
        // here in this example a -> array[1], b -> array[2], c -> array[3], d -> array[3], e -> array[4]
        // next then f should go to again in array[3] so loop breaks here.
        for (var j = 0; j < nRows && count < string.length; j++) {
            if (array[j] == undefined) {
                array[j] = string[count];
                count = count + 1;
            } else {
                array[j] = array[j] + string[count];
                count = count + 1;
            }
        }
        // this loop iterates back and stores character from array [3] -  array[0]
        for (var k = nRows - 2; k > 0 && count < string.length; k--) {
            array[k] = array[k] + string[count];
            count = count + 1;
        }
    }
    //This array contains strings of each row.
    console.log(array);
    // appending all strings into a single string.
    for (var m = 0; m < array.length; m++) {
        finalString = finalString + array[m];
    }
    return finalString;
}