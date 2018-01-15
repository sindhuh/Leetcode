var threeSum = function (nums, target) {
    nums = nums.sort();
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var firstNumber = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            var secondNumber = nums[j];
            var difference = target - (firstNumber + secondNumber);
            var searchNUmber = BinarySearch(nums, j + 1, difference);
            if (searchNUmber) {
                var set = [firstNumber, secondNumber, searchNUmber];
                result.push(set);
            }
        }
    }
    return result
};

function BinarySearch(nums, index, target) {
    var start = index;
    var end = nums.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (start <= end) {
        if (nums[middle] === target) {
            return nums[middle];
        } else if (nums[middle] > target) {
            end = middle - 1
        } else if(nums[middle] < target) {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2);
        if(start > end) {
            return;
        }
    }

}

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));