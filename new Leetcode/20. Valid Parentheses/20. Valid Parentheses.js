/**
 * Created by sindhuhari on 1/22/18.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];
    var map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    for (var i = 0; i < s.length; i++) {
        if(map[stack[stack.length -  1]] === s[i]) {
            stack.pop()
        } else  {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
};

console.log(isValid("()"))