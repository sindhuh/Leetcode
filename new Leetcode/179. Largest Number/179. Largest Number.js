/**
 * Created by sindhuhari on 2/13/18.
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums = nums.sort(stringCompare);
    var result = nums.join("");
    if(parseInt(result) === 0){
        return "0"
    }
    return result;
};

var stringCompare = function (a, b) {
    if ('' + a + b > '' + b + a) {
        return -1
    } else {
        return 1;
    }
};
