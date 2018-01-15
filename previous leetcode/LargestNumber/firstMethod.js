console.log(largestNumber([3, 30, 34, 5, 9]))
function largestNumber(nums) {
    var maxElem  = 0;
    var temp = 0;
   for(var i = 0 ; i < nums.length - 1 ; i ++) {
       maxElem = i;
       for(var j = i + 1 ; j < nums.length ; j++) {
           console.log(nums[i] , nums[j] , nums[maxElem], compareTwoNumbers(nums[maxElem], nums[j]))
           if(compareTwoNumbers(nums[maxElem], nums[j]) != nums[maxElem]) {
               maxElem = j;
               console.log("reachin he", nums[maxElem]);
           }
       }
       if(maxElem != i) {
           temp = nums[i];
           nums[i] = nums[maxElem];
           nums[maxElem] = temp;
       }
   }
    if(parseInt(nums.join("")) == 0) {
        return "0";
    }
    return nums.join("");
}

function compareTwoNumbers(num1 , num2) {
        var n1 = "" +num1 +num2;
        var n2 = "" +num2 +num1;
        if(parseInt(n1) > parseInt(n2)) {
            return num1;
        } else {
            return num2;
        }
}