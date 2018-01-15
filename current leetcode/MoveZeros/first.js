var moveZeroes = function(nums) {
    var i = 0;
    var count = 0;
    while(i < nums.length) {
        if(nums[i] === 0) {
            count = count + 1;
            nums.splice(i, 1);
        } else {
            i++;
        }

    }
    for(var j = 0 ; j < count ; j++) {
        nums.push(0)
    }
    return nums;
};
console.log(moveZeroes([0, 0, 1]));