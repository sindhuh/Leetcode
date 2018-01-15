/**
 * Created by sindhuhari on 6/21/16.
 */

console.log(subsets([1,2,3]));
function subsets(nums) {
    var result = [];
    var set = [];
    for(var  i = 0 ; i < nums.length ; i ++) {
        for(var j = 0;  j < nums.length ; j++) {
            set.push(nums[j]);
            console.log("set : " ,set)
            result.push(set);
        }
        set = [];
    }
    return result
}