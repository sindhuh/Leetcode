var array = [-7, -8, -2, -1, 0, 1, 2, 5, 4, 9];
quickSort(array, 0, array.length - 1);
console.log(array);
console.log("least missing positive number :" , firstMissingPositive(array));
function firstMissingPositive(array) {
    var minPositiveNumber = 1;
    for(var  i = 0 ; i < array.length ; i++) {
        if(array[i] >= 0) {
            if(array[i] > minPositiveNumber) {
                return minPositiveNumber;
           }
            minPositiveNumber = array[i] + 1;
       }
    }
    return array[array.length - 1] + 1;
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