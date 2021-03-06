/**
 * Created by sindhuhari on 1/23/18.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var start = 0;
    var end = nums.length - 1;
    while (start <= end) {
        var mid = parseInt((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (nums[mid] < target && nums[end] > target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};

