/**
 * Created by sindhuhari on 1/24/18.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var max = nums[0];
    var tempMax = nums[0];

    for (var i = 1; i < nums.length; i++) {
        tempMax = tempMax + nums[i];
        tempMax = Math.max(nums[i], tempMax);
        if (tempMax > max) {
            max = tempMax;
        }
    }
    return max;
};
