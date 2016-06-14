var target = 12;
var array = [7, 2, 1, 6, 8, 5, 3, 4];
quickSort(array, 0, array.length - 1);
console.log("sorted array : ", array);

for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > target) {

    } else {
        var searchNumber = target - array[i];
        if (searchNumber > array[array.length - 1]) {

        } else {
            var targetIndex = binarySearch(array, searchNumber);
            console.log(">>>> i : " , i, ">>>>> j : ", targetIndex)
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

function binarySearch(array, searchNumber) {
    var min = 0;
    var max = array.length - 1;
    var middle = parseInt(min + max / 2);
    while (min <= max) {
        if (array[middle] < searchNumber) {
            min = middle + 1;
        }
        else if (array[middle] == searchNumber) {
            return (middle + 1)
        } else {
            max = middle - 1;
        }
        middle = parseInt((min + max) / 2);
    }
    if (min > max) {
        return -1;
    }
}