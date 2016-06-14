var array = [10, 1, 2, 7, 6, 1, 5];
var target = 8;
quickSort(array, 0, array.length - 1);
combinationSum(array, target);
function combinationSum(array, target) {
    var sum = 0;
    var resultSet = "";
    var holdCombination = [];
    for(var i = 0 ; i < array.length; i ++) {
        for(var j = i ; j < array.length ; j++) {
            sum = sum + array[j];
            console.log(array[j])
            if(sum < target) {
                holdCombination.push(array[j]);
                console.log("reaching " ,holdCombination);
            } else if(sum == target) {
                console.log("reaching " ,holdCombination);
                resultSet.push(holdCombination);
            } else {
                break;
            }
        }
    }
    console.log(">>>>>> " ,resultSet);
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