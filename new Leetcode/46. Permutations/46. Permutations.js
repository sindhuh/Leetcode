/**
 * Created by sindhuhari on 1/24/18.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function(nums) {
    var result = [];
    var originalNums = nums.slice()
    result = permutations(result, nums, originalNums, true);
    return result;
};

var permutations = function (result, nums, originalNums, isFirst) {
    if(nums[0] === originalNums[0] && nums[nums.length - 1] === originalNums[originalNums.length - 1] && !isFirst) {
        return result;
    }
    for(var  i = nums.length - 1 ; i > 0; i--) {
        var newNums = swap(nums, i, i - 1);
        result.push(newNums);
    }
    //console.log(">>>", result);
    return permutations(result, nums, originalNums, false);
};

var swap = function (nums, a, b) {
    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
    return nums;
};

console.log(permute([1,2,3, 4]))

