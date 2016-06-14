var expression = "(){}[";
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
    var array = [];
    for (var i = 0 ; i < expression.length; i++ ) {
        if(expression[i] == '{' || expression [i] == "(" || expression[i] == "[" ) {
            if(expression[i] == '{') {
                array.push('}');
            } else if(expression [i] == "(") {
                array.push(')');
            } else {
                array.push(']');
            }
        } else if(expression[i] == '}' || expression [i] == "]" || expression[i] == ")") {
            if (array[array.length -  1] == expression[i]) {
                array.pop();
                console.log(array);
            }
        }
    }
    return array.length == 0;
}
