/**
 * Created by sindhuhari on 2/8/18.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] && map[nums[i]] >= 1) {
            return nums[i]
        } else {
            map[nums[i]] = (map[nums[i]] || 0) + 1
        }
    }
};