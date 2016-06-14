var array = [];
console.log(generate(5))
function generate(numRows) {
    var value = 0;
    var set = [];
    for(var  i = 0; i < numRows ; i++ ) {
        for(var j = 0 ; j <= i ; j++) {
            value = factorial(i) / (factorial(j)* factorial(i - j));
            console.log(value)
            set.push(value);
        }
        array.push(set);
        set = [];
    }
    return array;
}

function factorial(number) {
    if (number == 0) {
        return 1;
    }
    var fact = 1;
    for (var i = 1 ; i <= number ; i ++) {
        fact = fact * i ;
    }
    return fact;
}