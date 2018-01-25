/**
 * Created by sindhuhari on 1/24/18.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    var reds = 0;
    var whites = 0;
    var blues = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            reds = reds + 1;
        } else if (nums[i] === 1) {
            whites = whites + 1;
        } else if (nums[i] === 2) {
            blues = blues + 1;
        }
    }

    for (var j = 0; j < nums.length; j++) {
        if (reds > 0) {
            nums[j] = 0;
            reds = reds - 1;
        } else if (whites > 0) {
            nums[j] = 1;
            whites = whites - 1;
        } else if (blues > 0) {
            nums[j] = 2;
            blues = blues - 1;
        }
    }

};