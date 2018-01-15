rotate([1,2,3,4,5,6,7], 3)
function rotate(nums, k) {
    k = k % nums.length;
        nums = nums.reverse();
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);

}

function reverse(nums , start, end) {
    console.log("reverse :",nums);
    var temp = 0;
    while (!(start >= end)) {
        temp = nums[start];
        nums[start]  = nums[end];
        nums[end] = temp;
        start = start + 1;
        end = end - 1;
    }
 }