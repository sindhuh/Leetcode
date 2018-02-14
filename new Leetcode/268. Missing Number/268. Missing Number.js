/**
 * Created by sindhuhari on 2/12/18.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var map = {}
    for (var  i = 0 ; i < nums.length; i++) {
        map[nums[i]] = true;
    }

    for(i = 0 ; i <= nums.length; i++) {
        if(!map[i]) {
            return i
        }
    }
    return -1
};