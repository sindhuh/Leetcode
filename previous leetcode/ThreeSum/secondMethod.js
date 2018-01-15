var array = [-1, 0, 1, 2, -1, -4];
quickSort(array, 0, array.length - 1);
threeSum(array);

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

function threeSum(array) {
    console.log(array);
    var start = 0;
    var end = 0;
    var number1 = 0;
    var number2 = 0;
    var number3 = 0;
    var targetSum = 0;
    for (var i = 0; i < array.length; i++) {
        start = 0;
        end = array.length - 1;
        number1 = array[i];
        targetSum = 0 - number1;
        while (true) {
            if (i == start) {
                start = start + 1;
            }
            if (start == end) {
                break;
            }
            if (array[start] + array[end] < targetSum) {
                start = start + 1;
            } else if (array[start] + array[end] == targetSum) {
                number2 = array[start];
                number3 = array[end];
                console.log("(", number1, ", ", number2, ", ", number3, ")");
                start = start + 1;
            } else {
                end = end - 1;
            }
        }
    }
}