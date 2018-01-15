function findMin(nums) {
    var minElem = nums[0];

    for(var  i = 0 ; i < nums.length ; i ++) {
        if(nums[i] < minElem) {
            minElem = nums[i];
        }
    }
    return minElem;
}