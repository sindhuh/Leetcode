var isValid = function(s) {
    var mapping = {
        "(" : ")",
        "[": "]",
        "{" : "}"
    };

    var stack = [];
    if(!s || s.length <= 0) {
        return false;
    }
    if(s.length % 2 === 1){
        return false;
    }

    for(var i = 0 ; i < s.length; i++) {
        if(mapping[s[i]]) {
            stack.push(mapping[s[i]])
        } else {
            if(stack[stack.length - 1] === s[i]) {
                stack.pop();
            } else {
                stack.push(s[i])
            }
        }
    }

    if(stack.length === 0) {
        return true;
    } else {
        return false;
    }

};

console.log(isValid("()[]{}"));