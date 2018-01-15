var expression = "(){}[]";
var mapping = { '{' : '}' , "[" : "]" , "(" : ")" }
checkExpression(expression);

function checkExpression(expression) {
    if (expression.length == 0) {
        console.log("expression is empty");
    }
    if(isValidExpression(expression)) {
        console.log("The expression has valid parenthesis")
    } else {
        console.log("The expression has no valid parenthesis")
    }
}
function isValidExpression(expression) {
    var openBraces = Object.keys(mapping);
    var closedBraces = Object.keys(mapping).map(function(key){return mapping[key]});
    var stack = [];
    var isValid = true;

    for (var i = 0 ; i < expression.length; i++ ) {
        if(openBraces.indexOf(expression[i]) >= 0) {
           stack.push(mapping[expression[i]]);
        } else if(closedBraces.indexOf(expression[i]) >= 0) {
            console.log(stack[stack.length -  1], expression[i]);
            if (stack.pop() != expression[i]) {
                isValid = false;
                break;
            }
            console.log(stack);
        }
    }
    return isValid && stack.length == 0;
}

