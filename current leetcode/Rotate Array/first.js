var rotate = function (nums, k) {
    k = k % nums.length;
    reverseArray(nums, 0, nums.length - 1);
    reverseArray(nums, 0, k - 1);
    reverseArray(nums, k, nums.length - 1);
    console.log(nums)
};

var reverseArray = function (nums, start, end) {
    var temp;
    while(start < end) {
        temp = nums[start];
        nums[start]  = nums[end];
        nums[end] = temp;
        start = start + 1;
        end = end - 1;
    }
};

