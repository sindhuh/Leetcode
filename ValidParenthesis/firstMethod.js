
var expression = "({[a + b]})";
checkExpression(expression);

function checkExpression (expression) {
    if(isValidExpression(expression)) {
        console.log("The expression has valid parenthesis")
    } else {
        console.log("The expression has no valid parenthesis")
    }
}

function isValidExpression(expression) {
    var openAngular = 0;
    var closeAngular = 0;
    var openSquare = 0;
    var closeSquare = 0;
    var openFlower = 0;
    var closeFlower = 0;

    for(var i = 0 ; i < expression.length; i++) {
        if(expression[i] == "(") {
            openAngular = openAngular + 1;
        } else if(expression[i] == ")") {
            closeAngular = closeAngular + 1;
        } else if(expression[i] == "[") {
            openSquare = openSquare + 1;
        } else if(expression[i] == "]") {
            closeSquare = closeSquare + 1;
        } else if(expression[i] == "{") {
            openFlower = openFlower + 1;
        } else if(expression[i] == "}") {
            closeFlower = closeFlower + 1;
        }
    }
    return openAngular == closeAngular && openFlower == closeFlower && openSquare == closeSquare;
}