var thirdMax = function (nums) {
    if (!nums || nums.length <= 0) {
        return;
    }
    if (nums.length < 3) {
        if (nums.length === 1) {
            return nums[0]
        }
        if (nums.length === 2) {
            if (nums[0] >= nums[1]) {
                return nums[0];
            } else {
                return nums[1]
            }
        }
    }

    var firstLargest = -Number.MAX_VALUE;
    var secondLargest = -Number.MAX_VALUE;
    var thirdLargest = -Number.MAX_VALUE;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] !== firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = nums[i];
        }
        else if (nums[i] > thirdLargest && (nums[i] !== secondLargest && nums[i] !== firstLargest)) {
            thirdLargest = nums[i];
        }
    }
    if (thirdLargest !== Number.MIN_VALUE) {
        return thirdLargest;
    } else {
        return firstLargest
    }
};

console.log(thirdMax([1, 2, 2, 5, 3, 5]));