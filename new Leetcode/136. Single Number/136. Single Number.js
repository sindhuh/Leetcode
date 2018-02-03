/**
 * Created by sindhuhari on 2/1/18.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            delete map[nums[i]];
        } else {
            map[nums[i]] = 1;
        }
    }
    return Object.keys(map)[0]
};