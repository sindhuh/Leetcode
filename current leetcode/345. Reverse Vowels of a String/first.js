/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    if (!s || s.length === 0) {

    }
    var array = s.split("")
    var start = 0;
    var end = array.length - 1;
    var mapping = {
        'a': 1,
        'e': 2,
        'i': 3,
        'o': 4,
        'u': 5,
        'A': 6,
        'E': 7,
        'I': 8,
        'O': 9,
        'U': 10
    };
    while (start < end) {
        if (!mapping[array[start]]) {
            start = start + 1;
        }

        if (!mapping[array[end]]) {
            end = end - 1;
        }

        if (mapping[array[start]] && mapping[array[end]]) {
            var temp = array[end];
            array[end] = array[start];
            array[start] = temp;
            start = start + 1;
            end = end - 1;
        }
    }
    return array.join("")
};
console.log(reverseVowels("leetcode"))