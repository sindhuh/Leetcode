/**
 * Created by sindhuhari on 2/2/18.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if(!nums || nums.length === 0) {
        return 0;
    }
    if(nums.length === 1) {
        return nums[0]
    }

    var maxAmount = [];
    maxAmount[0] = nums[0];
    maxAmount[1] = Math.max(nums[0], nums[1]);
    for(var i = 2 ; i < nums;i++) {
        maxAmount[i] = Math.max(maxAmount[i - 2] + nums[i], maxAmount[i-1]);
    }
    return maxAmount[maxAmount.length - 1];
};