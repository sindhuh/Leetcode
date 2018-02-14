/**
 * Created by sindhuhari on 2/5/18.
 */
/**
 * Created by sindhuhari on 1/22/18.
 */
var fourSum = function (nums) {
    function sortNumber(a, b) {
        return a - b;
    }

    nums = nums.sort(sortNumber);
    var result = [];
    for (var i = 0; i < nums.length - 3; i++) {
        if (i === 0 || nums[i] > nums[i - 1]) {
            for (var m = i + 1; m < nums.length - 2; m++) {
                if (nums[m] > nums[m - 1]) {
                    var j = m + 1;
                    var k = nums.length - 1;

                    while (j < k) {
                        if ((nums[i] + nums[m] + nums[j] + nums[k]) === 0) {
                            var set = [nums[i], nums[m], nums[j], nums[k]];
                            result.push(set);
                            j = j + 1;
                            k = k - 1;
                            while (j < k && nums[j] === nums[j - 1]) {
                                j = j + 1;
                            }
                            while (j < k && nums[k] === nums[k + 1]) {
                                k = k - 1;
                            }
                        } else if ((nums[i] + nums[j] + nums[k]) > 0) {
                            k = k - 1;
                        } else {
                            j = j + 1;
                        }
                    }
                }
            }

        }
    }
    return result;
};

console.log(fourSum([0, 0, 0, 0]))