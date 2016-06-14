//Given a sorted array of integers, find the starting and ending position of a given target value.

var array = [1, 4,4,4,4,4,4 ,8];
var target = 4;
console.log(findRange(array, target));
function findRange(array, target) {
    var range = "";
    if(array.length == 0 || array.length == undefined) {
       return "(-1 -1)";
    }
    var startIndex = binarySearch(array, target);
    console.log(startIndex)
    if(startIndex == -1) {
        return "(-1 -1)";
    }
    for(var i = startIndex + 1 ; i < array.length ; i++) {
        if(array[startIndex] != array[i]) {
            range = "(" + startIndex + " " + (i - 1) + ")";
            return range;
        }
    }
    range = "(" + startIndex + " " +  (array.length - 1) + ")";
    return range;
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
;            return (middle);
        } else {
            max = middle - 1;
        }
        middle = parseInt((min + max) / 2);
    }
    if (min > max) {
        return -1;
    }
}