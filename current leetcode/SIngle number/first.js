var singleNumber = function(nums) {
    if(!nums) {
       return;
    }

    var mapping = {};
    for(var i = 0 ; i < nums.length; i++) {
       if(mapping[nums[i]]) {
           if(mapping[nums[i]] === 1) {
               delete mapping[nums[i]]
           }
       } else {
           mapping[nums[i]] = 1;
       }
    }
    return Object.keys(mapping)[0];
};

console.log(singleNumber([2, 3, 6, 3, 4, 4, 2]))