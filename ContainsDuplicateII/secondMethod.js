
var array = [1,0,1,1];
//var array = ["sindhu", "nags", "nagsusu"]
var distance = 1;
console.log(containsNearbyDuplicate(array, distance));
function containsNearbyDuplicate (nums, k) {
    var hash = {};
    var value = 0;
    var isValid = false;
    if(nums.length <= 1) {
        return false;
    }
    for(var i = 0 ; i <= nums.length - 1 ; i ++) {
        value = nums[i];
        if(hash[value] == undefined) {
            hash[value] = i;
        } else {
            if(i - hash[value] <= k) {
                isValid = true;
            } else {
                hash[value] = i;
            }
        }
    }
    console.log(hash)
    return isValid;
};