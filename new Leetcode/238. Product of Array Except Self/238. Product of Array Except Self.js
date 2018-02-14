/**
 * Created by sindhuhari on 2/13/18.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    var output = [];
    var product = 1;
    for (var i = 0; i < nums.length; i++) {
        output[i] = product;
        product = product * nums[i];
    }

    product = 1;
    for (i = nums.length - 1; i >= 0; i--) {
        output[i] = output[i] * product;
        product  = product * nums[i];
    }
    return output;
};
productExceptSelf([1, 2, 3, 4]);