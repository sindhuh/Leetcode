/**
 * Created by sindhuhari on 5/18/16.
 */
//There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.

var nums1 = [1, 3, 5, 7, 9, 11];
var nums2 = [2, 4, 6];
var mergeArray = [];

var m = nums1.length;
var n = nums2.length;

var medianIndex = parseInt((m + n) / 2);

var pointer1 = 0;
var pointer2 = 0;

for (var i = 0; i < m + n; i++) {
    if (nums1[pointer1] <= nums2[pointer2]) {
        mergeArray[i] = nums1[pointer1];
        pointer1 = pointer1 + 1;
    } else if (nums1[pointer1] > nums2[pointer2]) {
        mergeArray[i] = nums2[pointer2];
        pointer2 = pointer2 + 1;
    } else {
        if (pointer1 < m) {
            mergeArray[i] = nums1[pointer1];
            pointer1 = pointer1 + 1;
        } else {
            mergeArray[i] = nums1[pointer2];
            pointer1 = pointer2 + 1;
        }
    }
    if (i == medianIndex) {
        console.log(mergeArray)
        console.log("median : " + mergeArray[medianIndex]);
        break;
    }
}