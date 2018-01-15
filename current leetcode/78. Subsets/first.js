var subsets = function(nums) {
    var result = [];
    var subset = [];
    if(!nums) {
       return null;
    }

    for(var i = 0 ; i < nums.length ; i++) {
        subset = [];
        for(var j = i; j < nums.length ; j++) {
            subset.push(nums[j]);
            result.push(subset);
            console.log(result)
        }
    }
    return result;
};

console.log(subsets([1,2,3]))