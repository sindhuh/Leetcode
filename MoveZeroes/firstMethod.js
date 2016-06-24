
moveZeros([0, 1, 0, 3, 12])
function moveZeros(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[count] = nums[i];
            count = count + 1;
        }
    }
    while (count < nums.length) {
         nums[count] = 0;
        count = count + 1;
    }
    console.log(count, nums)
}