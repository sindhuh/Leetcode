var findErrorNums = function(nums) {
    nums = nums.sort(function (a, b) {
        return a - b
    });
    var missingNUmber = null;
    for(var i = 0 ; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]) {
            nums.splice(i+1, 1)
            var repeatedNumber = nums[i]
        }
    }
    for(var j = 0 ; j < nums.length; j++) {
        if(j+1 === nums.length) {
            if(nums[j] !== nums[j - 1] + 1 && nums[j] - 1 > 0) {
                missingNUmber = nums[j] - 1;
            } else {
                missingNUmber = nums[j] + 1;
            }

            return [repeatedNumber, missingNUmber]
        }

        if(nums[j] !== j + 1) {
            if(nums[j] !== nums[j - 1] + 1 && nums[j] - 1 > 0) {
                missingNUmber = nums[j] - 1;
            } else {
                missingNUmber = nums[j] + 1;
            }

            return [repeatedNumber, missingNUmber]
        }

    }

};
