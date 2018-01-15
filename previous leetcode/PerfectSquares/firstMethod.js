console.log(numSquares(12))
function numSquares(n) {
    var count = 0;
    var sum = 0;
    var j = 0;
    for(var i = 0 ; i < n ; i++) {
        j = parseInt(Math.sqrt(n - i*i));
        console.log("j :" +j);
        sum = sum + j * j;
        console.log("sum :", sum)
        count = count + 1;
        console.log("count :" +count);
        if(sum >= n) {
            return count;
        }
    }
    return count;
}
