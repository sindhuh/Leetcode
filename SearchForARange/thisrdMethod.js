/**
 * Created by sindhuhari on 5/25/16.
 */
//Given a sorted array of integers, find the starting and ending position of a given target value.

//var array = [1, 1, 2, 2, 2, 4, 4, 4, 4, 8, 8];
var array =[1,1,1,1,1,1];
var target = 1;
console.log(findRange(array, target));
function findRange(array, target) {
    if (array.length == 0 || array.length == undefined) {
        return "(-1 -1)";
    }
    var start = startIndex(array, target);
    var end = endIndex(array, target);
    if (start == -1 || end == -1) {
        return "(-1 -1)";
    }
    var range = "(" + start + " " + end + ")";
    return range;

}

function startIndex(array, searchNumber) {
    var min = 0;
    var max = array.length - 1;
    var middle = Math.floor(min + max / 2);
    while (min <= max) {
        if (array[middle] < searchNumber) {
            min = middle + 1;
        }
        else if (array[middle] == searchNumber && array[middle - 1] != searchNumber) {
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
function endIndex(array, searchNumber) {
    var min = 0;
    var max = array.length - 1;
    var middle = Math.floor(min + max / 2);
    while (max <= min) {
        console.log(array[middle],  array[middle + 1] , searchNumber);
        if (array[middle] < searchNumber) {
            max = middle + 1;
        } else if (array[middle] == searchNumber && array[middle + 1] != searchNumber) {
            return (middle);
        } else {
            min = middle - 1;
        }
        middle = Math.floor((min + max) / 2);
    }
    if (min > max) {
        return -1;
    }
}


