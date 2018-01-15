/* Given an array and a value, remove all instances of that value in place and return the new length.

 Do not allocate extra space for another array, you must do this in place with constant memory.

 The order of elements can be changed. It doesn't matter what you leave beyond the new length.

 Example:
 Given input array nums = [3,2,2,3], val = 3

 Your function should return length = 2, with the first two elements of nums being 2.
 */

var array = [1, 6, 4, 3, 35, 7, 8, 43, 2, 68, 8];
var value = 8;
var final = removeElement(array,value);
console.log(final + " with length : " + final.length);

function removeElement(array, value) {
    var i = 0;
    while (i < array.length) {
        if (array[i] == value) {
            array.splice(i, 1);
            i = i - 1;
        }
        i = i + 1;
    }
    return array.length;
}