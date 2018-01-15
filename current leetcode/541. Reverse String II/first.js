/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if(!s || s.length === 0) {
        return s
    }

    if(s.length <= k) {
        return s.split("").reverse().join("");
    }

    var array = s.split("");
    var i = 0;
    while( i < array.length ) {
        var remainingStringLength = array.length - i;
        if(remainingStringLength > (2 * k)) {
            reverseSpecificChars(array, i, i + k - 1);
            i = i + (2 * k);
        } else if (remainingStringLength >= k) {
            reverseSpecificChars(array, i, i + k - 1);
            return array.join("");
        } else if (remainingStringLength < k) {
            reverseSpecificChars(array, i, array.length - 1);
            return array.join("");
        }
    }
    return array.join("")
};

var reverseSpecificChars = function (array, start, end) {
    while (start < end) {
        var temp = array[end];
        array[end] = array[start];
        array[start] = temp;
        start = start + 1;
        end = end - 1
    }
};

console.log(reverseStr("abcd", 2));