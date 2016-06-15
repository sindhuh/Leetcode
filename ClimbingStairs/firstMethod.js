console.log(climbStairs(5))
function climbStairs(num) {
    var array = [];
    array[0] = 0;
    array[1] = 1;
    array[2] = 2;
    for(var i = 3 ; i <= num ; i ++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[num];
}