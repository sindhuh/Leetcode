//Given a sorted array of integers, find the starting and ending position of a given target value.

var array = [1, 4,4,4,4,4,4 ,8];
var target = 4;
console.log(findRange(array, target));
function findRange(array, target) {
    var range = "";
    if(array.length == 0 || array.length == undefined) {
        return "(-1 -1)";
    }
    var indexFoundAt = binarySearch(array, target);
    var startIndex = indexFoundAt;
    var endIndex = indexFoundAt;

    if(indexFoundAt == -1) {
        return "(-1 -1)";
    } else {
        while(array[startIndex] == array[startIndex - 1]) {
            startIndex = startIndex - 1;
        }
        while(array[indexFoundAt] == array[indexFoundAt + 1]) {
            endIndex = indexFoundAt + 1;
            indexFoundAt = indexFoundAt + 1;
        }
        range = "(" + startIndex + " " + endIndex + ")";
        return range;
    }
}

function binarySearch(array, searchNumber) {
    var min = 0;
    var max = array.length - 1;
    var middle = Math.floor(min + max / 2);
    while (min <= max) {
        if (array[middle] < searchNumber) {
            min = middle + 1;
        }
        else if (array[middle] == searchNumber) {
            return (middle);
        } else {
            max = middle - 1;
        }
        middle = Math.floor((min + max) / 2);
    }
    if (min > max) {
        return -1;
    }
}
