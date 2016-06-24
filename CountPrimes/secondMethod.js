var primes = [];
var array = [];
console.log(countPrimes(499979));
function countPrimes(num) {
    if(num == 2 || num == 1) {
        return 0;
    }
    if(num == 3) {
        return 1;
    }
    for(var  i = 2; i < num ; i++) {
        array.push(i);
    }
    remainingNumbers(array[0], array);
    return primes.length;
}
var temp = [];
function remainingNumbers(number, array) {
    temp = array;
    while(true) {
        primes.push(number);
        if(temp.length == 0) {
            return;
        }
        var result = [];
        for (var i = 0; i < temp.length; i++) {
            if (!(temp[i] % number == 0)) {
                result.push(temp[i]);
            }
        }
        number = result.shift();
        temp = result;
    }
}
