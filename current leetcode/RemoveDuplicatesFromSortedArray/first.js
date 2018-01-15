var removeDuplicates = function(nums) {
    if(!nums) {
       return 0
    }
    var i = 0;
    while(i < nums.length) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1, 1)
            i = i - 1;
        }
        i = i + 1;
    }
    return nums.length;
};

console.log(removeDuplicates([1,1, 1,2]))