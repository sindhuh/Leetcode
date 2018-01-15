function search(nums, target) {
        var start = 0;
        var end = nums.length -1;
        while (start <= end) {
            var middle = parseInt((start + end) / 2);
            if(nums[middle] == target) {
                return middle;
            } else if (nums[start] <= nums[middle]) {
                if(nums[start] <= target && nums[middle] > target) {
                    end = middle  - 1;
                } else {
                    start = middle + 1;
                }
            } else {
                if(nums[middle] < target && nums[end] >= target) {
                    start = middle + 1;
                } else {
                    end = middle -1;
                }
            }
        }
    return -1;
}