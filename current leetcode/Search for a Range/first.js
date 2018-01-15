var searchRange = function(nums, target) {
    if (nums.length === 0 || nums.length === undefined) {
        return [-1 ,-1];
    }
   return startIndex(nums,target);

};

function startIndex(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    var middle = parseInt((start + end)/2);
    while(start <= end) {
        if(nums[middle] === target) {
            var foundIndex = middle;
            console.log(middle)
            while(true) {
               if(nums[middle + 1] !== target){
                   var last = middle;
                   break;
               } else {
                   middle = middle + 1
               }
            }
            while(true) {
                if(nums[foundIndex - 1] !== target){
                    var first = foundIndex;
                    break;
                } else {
                    foundIndex = foundIndex - 1
                }
            }
            return [first, last]
        } else if(target > nums[middle]) {
            start = middle + 1
        } else if(target < nums[middle]){
            end = middle - 1
        }
        middle = parseInt((start + end)/2);
    }
    if(start > end) {
        return [-1, -1]
    }
}

// function endIndex(nums, target) {
//     var start = 0;
//     var end = nums.length - 1;
//     var middle = parseInt((start + end)/2);
//     while(start <= end) {
//         if(nums[middle] === target && nums[middle + 1] !== target) {
//             return;
//         } else if(target > nums[middle]) {
//             start = middle + 1
//         } else if(target < nums[middle]){
//             end = middle - 1
//         }
//         middle = parseInt((start + end)/2);
//     }
//     if(start > end) {
//         return -1
//     }
// }

console.log(searchRange([5,7,7,8,8,10], 8))