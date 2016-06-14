// log(m + n) lo calculate cheyamanadu kabatti binary search use arrays ni fiter chesadu anukunna
// after doing lot of examples ochina solution enti ante
//  first find medians of two sorted arrays separately
// if median1 < median2 avuthe then final median will be in array1[median1 - end] or array2[0 - median2] lo untundhi
// or if median1 > median2 avuthe then final median will be in array1[0 - median1] or array2[median2 - end] lo untundhi
// if median1 == median2 avuthe then that number will be the median.

var nums1 = [1, 3, 5, 7, 9, 11];
var nums2 = [2, 4, 6];

var firstArrayLength = 0;
var secondArrayLength = 0;
var median1 = 0;
var median2 = 0;

findMedian(nums1, nums2);


function getMedian(array) {
    var n = array.length;
    if (array.length % 2 == 0) {
        return ((array[n / 2] + array[n / 2 - 1]) / 2);
    } else {
        return array[n / 2];
    }
}


function findMedianWithOneArrayAndOneValueEvenCase(array, value) {
    var n = array.length;
    if(value < array[n/2 - 1]) {
        console.log("median : 9 ", array[n/2 - 1]);
    } else if(value > array[n/2  -1] && value < array[n/2]) {
        console.log("median : 10", value);
    } else {
        console.log("median : 11 ", array[n/2]) ;
    }
}

function findMedianWithOneArrayAndOneValueOddCase(array, value) {
    var n = array.length;
    if (value < array[n / 2 - 1]) {
        console.log("median : 6 ", ((array[n / 2] + array[n / 2 - 1]) / 2));
    } else if (( value > array[n / 2 - 1] && value < array[n / 2]) || (value > array[n / 2] && value < array[n / 2 + 1])) {
        console.log("median : 7", ((value + array[n / 2]) / 2));
    } else {
        console.log("median : 8" , ((array[n / 2] + array[n / 2 + 1]) / 2));
    }
}

function findMedianWithOneArrayTwoValuesOddCase(array, value1, value2) {
    var n = array.length;
    var a = array[n/2];
    var b = Math.max(value1 , array[n/2 -1]);
    var c = Math.min(value2, array[n/2 + 1]);
    if(a >= b && a <= c) {
        console.log("median 3 : ", a);
    } else if(b>=a && b <= c){
        console.log("median 4 : ", b);
    } else {
        console.log("median 5 : ", c);
    }
}

function findMedianWithOneArrayTwoValuesEvenCase(array, value1, value2){
    var temp, smallest = 0;
    var n =array.length;
    var a = array[n/2];
    var b = array[n/2 - 1];
    var c = Math.max(value1 , array[n/2 - 2]);
    var d = Math.max(value2, array[n/2 + 1]);
    var newArray = [a, b, c, d];
    for(var i = 0 ; i < 3; i ++) {
        smallest = i;
        for(var j = i + 1 ; j < 4; j ++) {
            if(newArray[j] < newArray[j]) {
                smallest = j;
            }
        }
        if(i != smallest) {
            temp = newArray[i];
            newArray[i] = newArray[smallest];
            newArray[smallest] = temp;
        }
    }
}

function findMedian(num1, num2) {
    firstArrayLength = num1.length;
    secondArrayLength = num2.length;

    median1 = parseInt(firstArrayLength/2 - 1);
    median2 = parseInt(secondArrayLength/2 - 1);

    var medianOfNum1 = getMedian(num1);
    var medianOfNum2 = getMedian(num2);

    if (medianOfNum1 == medianOfNum2) {
        console.log("median  : 11 ", medianOfNum1);
        return;
    }
    if (medianOfNum1 > medianOfNum2) {
        findMedian(nums1.slice(0, median1 + 1), nums2.slice(median2, secondArrayLength));
    } else {
        findMedian(nums1.slice(median1, firstArrayLength), nums2.slice(0, median2 + 1));
    }

    var median = 0;
    if (num1.length == 0 && nums2.length == 0) {
        return undefined;
    } else if (num1.length == 0 && num2.length > 0) {
        median = getMedian(num2);
        console.log("median 1: ", median);
    } else if (num2.length == 0 && num1.length > 0) {
        median = getMedian(num1);
        console.log("median 2: ", median);
    } else if (num1.length == 1 && num2.length == 1) {
        median = (num1[0] + num2[0]) / 2;
        return median;

    } else if (num1.length == 2 && num2.length == 2) {

    } else if (num1.length == 1 && num2.length % 2 == 0) {
        findMedianWithOneArrayAndOneValueEvenCase(num2, num1[0]);
    } else if (num1.length == 1 && num2.length % 2 != 0) {
        findMedianWithOneArrayAndOneValueOddCase(num2, num1[0])
    } else if (num1.length == 2 && num2.length % 2 == 0) {
        findMedianWithOneArrayTwoValuesEvenCase(num2, num1[0], num1[1]);
    } else if (num1.length == 2 && num2.length % 2 != 0) {
        findMedianWithOneArrayTwoValuesOddCase(num2, num1[0], num1[1])
    } else if (num2.length == 1 && num2.length % 2 == 0) {
        findMedianWithOneArrayAndOneValueEvenCase(num2, num1[0]);
    } else if (num2.length == 1 && num2.length % 2 != 0) {
        findMedianWithOneArrayAndOneValueOddCase(num2, num1[0]);
    } else if (num2.length == 2 && num2.length % 2 == 0) {
        findMedianWithOneArrayTwoValuesEvenCase(num1, num2[0], num2[1]);
    } else if (num2.length == 2 && num2.length % 2 != 0) {
        findMedianWithOneArrayTwoValuesOddCase(num2, num1[0], num1[1])
    }

}