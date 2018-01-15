var isPerfectSquare = function(x) {
    var i = 0;
    while(true) {
        if(i * i === x) {
            return true;
        }  else if(i*i > x) {
            return false;
        }
        i = i + 1;
    }
};
console.log(isPerfectSquare(25))