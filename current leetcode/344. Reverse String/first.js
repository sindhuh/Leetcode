/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
    var array = s.split("")
    var j = array.length - 1;
    var i = 0;
    while (i < j) {
        var temp = array[j];
        array[j] = array[i];
        array[j] = temp;
        i = i + 1;
        j = j - 1;
    }
    return array.join("")
};
console.log(reverseString("hello"))