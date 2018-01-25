/**
 * Created by sindhuhari on 1/23/18.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    var leftIndex = binarySearch(nums, target, true);
    var rightIndex = binarySearch(nums, target, false);
    return [leftIndex, rightIndex];
};

var binarySearch = function (nums, target, isLeft) {
    var result = -1;
    var start = 0;
    var end = nums.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        console.log(start, end, mid);
        if (nums[mid] === target) {
            result = mid;
            if(isLeft) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (nums[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    return result
};

console.log(searchRange([5,7,7,8,8,10], 8));