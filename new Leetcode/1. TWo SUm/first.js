/**
 * Created by sindhuhari on 1/20/18.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var difference = target - nums[i];
        var targetINdex = nums.indexOf(difference);
        if (targetINdex > -1 && i !== targetINdex) {
            return [i, targetINdex]
        }
    }
};

console.log(twoSum([3, 2, 4], 6));