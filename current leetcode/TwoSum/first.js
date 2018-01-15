var numbers = [3, 3];
var targetNum= 6;

var twoSum = function (nums, target) {
    var mapArray = {}
    for(var i = 0; i < nums.length ; i++) {
        mapArray[nums[i]] = i;
    }

    for(var j = 0; j < nums.length ; j++) {
        var difference =  target - nums[j];
        if(mapArray[difference] && mapArray[difference] !== j) {
            return [ mapArray[difference], j]
        }
    }
}
console.log(twoSum(numbers, targetNum))