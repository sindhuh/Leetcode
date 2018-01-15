/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.
 */

var array = [-1, 1, 2, 3, 4, 5, 6, 8, 9];
var target = -2;
var foundAt = findPosition(array, target);
console.log("found at : " , foundAt);
console.log(array);

function findPosition(array , target) {
    return binarySearch(array,target);
}
function binarySearch(array, searchNumber) {
    var min = 0;
    var max = array.length - 1;
    var middle = parseInt(min + max / 2);
    while (min <= max) {
        if (array[middle] < searchNumber) {
            min = middle + 1;
        }
        else if (array[middle] === searchNumber) {
            return middle;
        } else {
            max = middle - 1;
        }
        middle = parseInt((min + max) / 2);
    }
    if (min > max) {
        if(array[0] > searchNumber) {
            return middle;
        }
        return middle + 1;
    }
}