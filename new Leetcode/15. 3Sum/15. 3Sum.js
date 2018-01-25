/**
 * Created by sindhuhari on 1/22/18.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var first = nums[i]
        for (var j = i + 1; j < nums.length; j++) {
            var second = nums[j];
            var difference = 0 - (nums[i] + nums[j])
            var third = binarySearch(nums, j + 1, difference);
            if (third) {
                var set = [first, second, third];
                result.push(set);
            }
        }
    }
    return result;
};


var binarySearch = function (nums, index, target) {
    var start = index;
    var end = nums.length - 1;
    var mid = Math.floor((start + end) / 2);
    while (start <= end) {
        if (target === nums[mid]) {
            return nums[mid];
        } else if (target < nums[mid]) {
            end = mid - 1;
            mid = Math.floor((start + end) / 2);
        } else {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        }
        if (start > end) {
            return;
        }
    }

};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))