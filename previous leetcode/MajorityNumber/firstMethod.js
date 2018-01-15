console.log(majorityElement([1,2,5,6,1,1,6,1,6,1,6,6,6,6,6,6]));
function majorityElement(nums) {
    var maxCount = parseInt(nums.length / 2);
    console.log("max count : ", maxCount)
    var count = 0;
    quickSort(nums, 0, nums.length - 1);
    console.log(nums);
    var j = 0;
    var k = 0;
    for(var  i = 0 ; i < nums.length; i++) {
        console.log(nums[j] , nums[k]);
        if(nums[j] == nums[k]) {
            k = k + 1;
            count = count + 1;
        } else {
            console.log(">>> ", nums[j], nums[k], count , i);
            k = k + 1;
            count = count + 1;
            if(count > maxCount) {
                return nums[j];
            } else {
                j = k - 1;
                count = 0;
            }
        }
    }
}

function quickSort(array, start, end) {
    if (start < end) {
        var pIndex = partitionIndex(array, start, end);
        quickSort(array, 0, pIndex - 1)
        quickSort(array, pIndex + 1, end);
    }
}

function partitionIndex(array, start, end) {
    var pivot = array[end];
    var pIndex = start;
    for (var i = start; i < end; i++) {
        if (array[i] <= pivot) {
            var temp = array[i];
            array[i] = array[pIndex];
            array[pIndex] = temp;
            pIndex = pIndex + 1;
        }
    }
    temp = array[pIndex];
    array[pIndex] = array[end];
    array[end] = temp;
    return pIndex;
}