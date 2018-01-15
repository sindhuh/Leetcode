var array = [1,2,3,4,5,7,6];
console.log(containDuplicates(array));
function containDuplicates(nums) {
    var hash = {};
    var value = 0;
    if(nums.length == 0) {
     return true;
    }

    for(var i = 0 ; i <= nums.length; i++ ) {
        value = nums[i];
        if(hash[value] == undefined) {
            hash[value] = i;
        } else {
            
            return true;
        }
    }
    return false;
}