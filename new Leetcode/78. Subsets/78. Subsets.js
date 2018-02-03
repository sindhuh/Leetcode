/**
 * Created by sindhuhari on 1/25/18.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var result = [];
    var subset = [];
    if (!nums || nums.length === 0) {
        return result;
    }

    result = getAllSubsets(result, subset, nums, 0);
    return result;
};

var getAllSubsets = function (result, subset, nums, start) {
    //console.log(result, ">>>",subset)
    result.push(subset.slice());
    for(var i = start; i < nums.length; i++) {
        subset.push(nums[i]);
        //console.log(subset);
        getAllSubsets(result, subset, nums, i + 1);
        subset.pop();
    }
    return result;
};

console.log(subsets([1,2,3,4]))