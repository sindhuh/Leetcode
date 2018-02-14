/**
 * Created by sindhuhari on 1/25/18.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    var soFarGoodIndex = nums.length - 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        if(i + nums[i] >= soFarGoodIndex) {
            soFarGoodIndex = i;
        }
    }
    if(soFarGoodIndex === 0) {
        return true;
    } else {
        return false;
    }
};