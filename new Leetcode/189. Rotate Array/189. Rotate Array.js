/**
 * Created by sindhuhari on 2/2/18.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    reverseArray(nums, 0, nums.length - 1);
    reverseArray(nums, 0, k-1);
    reverseArray(nums, k, nums.length - 1)
};


var reverseArray = function (nums, start, end) {
    while (start < end) {
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start = start + 1;
        end = end - 1;
    }
    return nums
};