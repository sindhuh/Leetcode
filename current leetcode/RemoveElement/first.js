var removeElement = function(nums, val) {
    console.log(nums)
    if(!nums) {
        return 0
    }
    var i = 0;
    while(i < nums.length) {
        if(nums[i] === val) {
            nums.splice(i, 1)
            i = i - 1;
        }
        i = i + 1;
    }
    console.log(nums)
    return nums.length;
};
console.log(removeElement([3,2,2,3], 3));