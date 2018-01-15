var expresion = "(}()()";
var mapping = { '(' : ')'};
console.log(longestValidParenthesis(expresion));
function longestValidParenthesis(expression) {
    var openBraces = Object.keys(mapping);
    var closedBraces = Object.keys(mapping).map(function(key){return mapping[key]});
    var stack = [];
    var longestLength = 0;
    stack.push(-1);
    for (var i = 0 ; i < expression.length; i++ ) {
        if(openBraces.indexOf(expression[i]) >= 0) {
            stack.push(i);
            console.log(stack);
        } else if(closedBraces.indexOf(expression[i]) >= 0) {
            console.log("reaching heere", expression[i])
            stack.pop();
            if(longestLength < (i - stack[stack.length - 1])) {
                longestLength = i - stack[stack.length - 1];
            }
        }
    }
    return longestLength;
}