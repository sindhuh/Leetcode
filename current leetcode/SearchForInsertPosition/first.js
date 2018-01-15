var searchInsert = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    var mid = parseInt((start + end)/2);
    while(start <= end) {
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] > target) {
           end = mid - 1
        } else {
            start = mid + 1;
        }
        mid = parseInt((start + end)/2);
    }

    if(start > end) {
        if(nums[mid] > target) {
            return mid
        } else {
            return mid + 1
        }
    }

};

var array = [1, 3, 5, 6, 9];
var target = 4;

console.log(searchInsert(array, target));