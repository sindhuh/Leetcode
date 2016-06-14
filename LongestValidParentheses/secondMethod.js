
var expresion = "()()()(()()()()()())";
var mapping = { '(' : ')'};
console.log("length : ", longestValidParenthesis(expresion));
function longestValidParenthesis(expression) {
    var length = 0;
    var subExpression = "";
    for (var i = 0 ; i < expression.length ; i++) {
        subExpression = expression[i];
        for(var j = i + 1; j < expression.length ; j ++) {
            subExpression = subExpression + expression[j];
            console.log("subExpression : " +subExpression)
            if(isvalidExpression(subExpression)) {
                if(subExpression.length > length) {
                    length = subExpression.length;
                }
            }
        }
        subExpression = "";
    }
    return length;
}

function isvalidExpression(expression) {
    var openBraces = Object.keys(mapping);
    var closedBraces = Object.keys(mapping).map(function(key){return mapping[key]});
    var stack = [];
    var isValid = true;

    for (var i = 0 ; i < expression.length; i++ ) {
        if(openBraces.indexOf(expression[i]) >= 0) {
            stack.push(mapping[expression[i]]);
        } else if(closedBraces.indexOf(expression[i]) >= 0) {
            if (stack.pop() != expression[i]) {
                isValid = false;
                break;
            }
        }
    }
    return isValid && stack.length == 0;
}