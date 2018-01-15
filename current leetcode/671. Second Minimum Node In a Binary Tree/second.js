var secondMin = Number.MAX_VALUE;
var firstMin;
var findSecondMinimumValue = function (root) {
    if(root !== null) {
        firstMin = root.val;
        searchSeconMin(root)
    }
    if(secondMin < Number.MAX_VALUE) {
        return secondMin;
    } else {
        return -1;
    }
};

var searchSeconMin = function (root) {
    if(root !== null) {
        console.log(firstMin, secondMin)
        if(firstMin < root.val && root.val < secondMin) {
            secondMin = root.val;
        } else if(firstMin === root.val) {
            searchSeconMin(root.left);
            searchSeconMin(root.right);
        }
    }
};