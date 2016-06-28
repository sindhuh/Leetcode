console.log(findMin([2,1]));
function findMin(nums) {
    var start = 0;
    var end = nums.length - 1;
    while(start < end) {
        var mid = parseInt((start + end)/ 2);
        console.log(nums[start], nums[end], nums[mid])
        if(nums[mid] < nums[start]) {
            end = mid;
        } else if(nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            return nums[start];
        }
    }
    return nums[start];
}
