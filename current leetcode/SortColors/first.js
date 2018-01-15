var sortColors = function (nums) {
    var numOfReds = 0;
    var numOfWhites = 0;
    var numOfBlues = 0;
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            numOfReds = numOfReds + 1;
        }
        if(nums[i] === 1) {
            numOfWhites = numOfWhites + 1;
        }
        if(nums[i] === 2) {
            numOfBlues = numOfBlues + 1;
        }
    }
    for (var j = 0; j < nums.length; j++) {
        if(numOfReds > 0) {
            nums[j] = 0;
            numOfReds = numOfReds - 1;
        } else if(numOfWhites > 0) {
            nums[j] = 1;
            numOfWhites = numOfWhites - 1;
        } else if (numOfBlues > 0) {
            nums[j] = 2;
            numOfBlues = numOfBlues - 1;
        }
    }

};