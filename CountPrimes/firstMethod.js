var startTime = new Date().getTime();
console.log(countPrimes(499979));
console.log(new Date().getTime() - startTime);
function countPrimes(number) {
    var count = 0;
    for(var i = 2 ; i < number ; i++) {
        if(isPrime(i)) {
            count = count + 1;
        }
    }
    return count + 1;
}

function isPrime(number) {
    for(var i = 2 ; i <= parseInt(number / 2) ; i++) {
        //console.log(i, number)
        if(number % i == 0) {
          //  console.log("eee")
           return false;
        }
    }
    return true;
}