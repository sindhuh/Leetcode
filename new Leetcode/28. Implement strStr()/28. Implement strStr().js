/**
 * Created by sindhuhari on 1/23/18.
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//

// var strStr = function (haystack, needle) {
//     for (var i = 0; i < haystack.length; i++ ) {
//         var j = 0;
//         for (; j < needle.length; j++ ) {
//             if (haystack[i + j] != needle[j]) {
//                 break;
//             }
//         }
//         if (j == needle.length) {
//             return i;
//         }
//     }
// };

var strStr = function (haystack, needle) {
    var i = 0, j = 0, k = 0;
    if (haystack.length === 0 && needle.length === 0) {
        return 0;
    }
    if (haystack.length > 0 && needle.length === 0) {
        return 0;
    }

    if (haystack.length < needle.length) {
        return -1;
    }

    if (haystack === needle) {
        return 0
    }

    var isMatched = false;

    while (j < haystack.length) {
        if (haystack[j] === needle[k]) {
            isMatched = true;
            i = j + 1;
            //console.log("i", i)
            for (k = 0; k < needle.length; k++) {
                //console.log(k, j, needle[k], haystack[j])
                if (haystack[j] === needle[k]) {
                    //console.log(haystack[j], needle[k] , k, needle.length -1)
                    if (k === needle.length - 1) {
                        return i - 1;
                    }
                } else {
                    k = 0;
                    break;
                }
                j = j + 1;
            }
            j = i;
        }
        if(isMatched) {
            j = i;
            isMatched = false
        } else {
            j = j + 1;

        }
    }
    return -1;
};

console.log(strStr("mississippi", "pi"))