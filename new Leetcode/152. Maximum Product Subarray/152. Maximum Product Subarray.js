/**
 * Created by sindhuhari on 2/8/18.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {

    var finalMax = nums[0];
    var min = nums[0];
    var max = nums[0];

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            var temp = max;
            max = Math.max(min * nums[i], 1);
            min = min * temp;
        } else if (nums[i] > 0) {
            max = max * nums[i];
            min = Math.min(min * nums[i], 1)
        } else {
            max = 1;
            end = 1;
        }

        if (max > finalMax) {
            finalMax = max;
        }
    }
    return finalMax
};