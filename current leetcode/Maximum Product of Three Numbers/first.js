var thirdMax = function (nums) {
    if (!nums || nums.length <= 3) {
        return;
    }

    var firstLargest = -Number.MAX_VALUE;
    var secondLargest = -Number.MAX_VALUE;
    var thirdLargest = -Number.MAX_VALUE;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = nums[i];
        } else if (nums[i] >= secondLargest && nums[i] !== firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = nums[i];
        }
        else if (nums[i] >= thirdLargest && (nums[i] !== secondLargest && nums[i] !== firstLargest)) {
            thirdLargest = nums[i];
        }
    }
    if (thirdLargest !== -Number.MAX_VALUE) {
        return thirdLargest;
    } else {
        return firstLargest
    }
};

console.log(thirdMax([1, 2, 2, 5, 3, 5]));