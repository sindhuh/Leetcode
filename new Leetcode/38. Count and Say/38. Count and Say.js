/**
 * Created by sindhuhari on 1/24/18.
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var str = "1";
    for (var i = 2; i <= n; i++) {
        var tmp = "";
        var count = 1;
        for (var j = 0; j < str.length; j++) {
            if (str[j] !== str[j + 1]) {
                tmp = tmp + count;
                tmp = tmp + str[j];
                count = 1;
            } else {
                count = count + 1;
            }
        }
        str = tmp
    }
    return str;
};

console.log(countAndSay(1))