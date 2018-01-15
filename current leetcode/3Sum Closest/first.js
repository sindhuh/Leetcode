var threeSumClosest = function (nums, target) {
    if (!nums || nums.length < 3) {
        return
    }

    function sortNumber(a, b) {
        return a - b;
    }

    nums = nums.sort(sortNumber);
    var min = Number.MAX_VALUE;
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            var sum = (nums[j] + nums[k] + nums[i]);
            var diff = Math.abs(sum - target);
            if(diff === 0) {
                return sum;
            }

            if (diff < min) {
                min = diff;
                result = sum;
            }
            if (sum <= target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result
};

