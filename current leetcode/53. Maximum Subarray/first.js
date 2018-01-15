/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var currentMax = nums[0];
    var maxUpToNow = nums[0];
    for(var i = 1 ; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        if(currentMax > maxUpToNow) {
            maxUpToNow = currentMax;
        }
    }
    return maxUpToNow;
};