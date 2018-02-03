/**
 * Created by sindhuhari on 1/24/18.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * Created by sindhuhari on 1/24/18.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function (nums) {
    var result = [];
    if (!nums || nums.length === 0) {
        return result;
    }
    if (nums.length === 1) {
        result.push(nums);
        return result;
    }
    result = permutations(result, nums, 0, nums.length  - 1);
    return result;
};


var permutations = function (result, nums, start, end) {
    if (start === end) {
        result.push(nums.slice());
        return result;
    } else {
        for (var i = start; i <= end; i++) {
            nums = swap(nums, start, i);
            permutations(result, nums, start + 1, end);
            nums = swap(nums, start, i);
        }
    }
    return result
};

var swap = function (nums, a, b) {
    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
    return nums;
};

console.log(permute([5, 4, 6, 2]));
