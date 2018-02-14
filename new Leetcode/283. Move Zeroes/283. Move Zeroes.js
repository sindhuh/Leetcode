/**
 * Created by sindhuhari on 2/8/18.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] === 0 && nums[j] !== 0) {
            j = i;
        } else if(nums[i] !== 0 && nums[j] === 0) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j = j + 1;
        }
    }
    console.log(nums)
};

moveZeroes([1,0,3,12])