/**
 * Created by sindhuhari on 2/12/18.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
    var arr = s.split("");
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start = start + 1;
        end = end - 1;
    }
    return arr.join("")
};