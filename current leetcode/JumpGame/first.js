// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//
// Each element in the array represents your maximum jump length at that position.
//
//Determine if you are able to reach the last index.
//
// For example:
//  A = [2,3,1,1,4], return true.
// A = [3,2,1,0,4], return false.
var canJump = function (nums) {
    if(!nums) {
       return false;
    }
    if(nums.length === 0) {
        return false
    }
    if(nums.length === 1) {
        return true
    }
    var lastIndex = nums.length - 1;
    var i = 0;
    var previousIndex = 0;
    while(nums[i] < nums.length) {
        if(nums[i] > lastIndex) {
            return false;
        } else if(nums[i] + i === lastIndex) {
            return true
        } else {
            previousIndex = i;
            i = nums[i];
            if(previousIndex === nums[i]) {
                return false;
            }
        }
    }
    return false;
};

console.log(canJump([2,0]));