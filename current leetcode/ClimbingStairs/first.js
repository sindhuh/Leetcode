var nextGreaterElement = function(findNums, nums) {
    function sortNumber(a,b) {
        return a - b;
    }
    nums.sort(sortNumber)
    var mapping = {};
    var result = [];
    for(var i = 0; i < nums.length; i++) {
        mapping[nums[i]] = i
    }

    for(var j = 0 ; j < findNums.length; j++) {
        var index = mapping[findNums[j]];
        index = index + 1;
        while(index < nums.length) {
            if(nums[index + 1] > findNums[j]) {
                result.push(nums[index + 1]);
                break;
            } else {
                index = index + 1;
            }
        }
        if(!result[j]) {
            result.push(-1)
        }

    }
    return result
};


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var array = [];
    array[0] = 0;
    array[1] =  1;
    array[2] = 2;
    for (var i = 3; i <= n ; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[n];
};


console.log(nextGreaterElement([4,1,2], [1, 3, 4, 2]))