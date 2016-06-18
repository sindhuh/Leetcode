console.log(missingNumber(0))
function missingNumber(nums) {
    var hashMap = [];
    
    for(var i = 0 ; i < nums.length - 1 ; i ++) {
        if(!(nums[i] + 1 == nums[i + 1])) {
            return nums[i] + 1;
        }
    }
    return nums[i - 1] + 1;
}
