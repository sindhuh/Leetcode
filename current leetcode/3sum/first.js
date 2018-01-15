var threeSum = function(nums, target) {
    if(!nums || nums.length <= 2) {
        return [];
    }
    var mapping = {};
    var result_mapping = {};
    var result = [];
    var set =[];
    for(var i = 0 ; i < nums.length; i++) {
        if(!mapping[nums[i]]) {
            mapping[nums[i]] = i
        }
    }
    if(Object.keys(mapping).length === 1) {
        if(nums[0] * 3 === target) {
            set = [nums[0], nums[0], nums[0]];
            result.push(set)
            return result;
        }
    }
    console.log(mapping)
    for(var j = 0 ; j < nums.length; j++) {
        for(var k = j + 1 ; k < nums.length; k++) {
            var twoSumVal = nums[j] + nums[k];
            var twoSumDiff = target - twoSumVal;

            if(mapping[twoSumDiff]) {
                if(mapping[twoSumDiff] !== j && mapping[twoSumDiff] !== k) {
                    var mappingKey = j + k + mapping[twoSumDiff];
                    if(!result_mapping[mappingKey]) {
                        set = [nums[j], nums[k], twoSumDiff];
                        result_mapping[mappingKey] = set;
                        result.push(set)
                    }
                }
            }
        }
    }
    return result;
};
console.log(threeSum([-1,0,1,0], 0));