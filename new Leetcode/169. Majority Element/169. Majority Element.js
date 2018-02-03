/**
 * Created by sindhuhari on 2/2/18.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    var majorityElement = nums[0];
    var maxMajorityCount = 0;
    var majorityCount = 0;
    nums.sort(function (a, b) {return a - b});
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]) {
            majorityCount = majorityCount + 1;
        } else {
            majorityCount = majorityCount + 1;
            if(majorityCount > maxMajorityCount) {
                majorityElement = nums[i];
                maxMajorityCount = majorityCount;
            }
            majorityCount = 0;
        }
    }
    return majorityElement
};