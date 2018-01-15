var threeSum = function (nums, target) {
    function sortNumber(a,b) {
        return a - b;
    }
    nums = nums.sort(sortNumber);
    console.log(nums)
    var result = [];
    for (var i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] > nums[i - 1]) {
            var j = i + 1;
            var k = nums.length - 1;

            while (j < k) {
                if ((nums[j] + nums[k] + nums[i]) === 0) {
                    var set = [nums[j], nums[k], nums[i]];
                    result.push(set);
                    j = j + 1;
                    k = k - 1;
                    while (j < k && nums[j] === nums[j - 1]) {
                        j = j + 1
                    }
                    while (j < k && nums[k] === nums[k + 1]) {
                        k = k - 1
                    }
                } else if (nums[i] + nums[j] + nums[k] > 0) {
                    k = k - 1;
                } else {
                    j = j + 1
                }
            }
        }
    }
    return result
};
console.log(threeSum([3, 0, -2, -1, 1, 2], 0));