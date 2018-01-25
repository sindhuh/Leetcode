/**
 * Created by sindhuhari on 1/23/18.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 0;
    var j = 1;
    while (j < nums.length) {
        if(nums[j] != nums[i]) {
            i = i + 1;
            nums[i] = nums[j]
        }
        j = j + 1;
    }

    var result = [];
    for(var k = 0 ; k <= i ; k ++ ) {
        result[k] = nums[k]
    }

    console.log(nums, result);
    return result.length;

};

removeDuplicates([1,2,2,3,4,4,4,5,6])