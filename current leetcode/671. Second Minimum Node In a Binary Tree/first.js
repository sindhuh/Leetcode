var findSecondMinimumValue = function (root) {
    var array = [];
    getNodeValues(root, array);
    var firsMin = Number.MAX_VALUE;
    var secondMin = Number.MAX_VALUE;
    array = [2,2,2]
    if(array.length < 2) {
        return -1;
    }
    for (var i = 1; i < array.length; i++) {
        if (array[i] < firsMin) {
            secondMin = firsMin;
            firsMin = array[i];
        } else if(array[i] < secondMin && array[i] !== firsMin) {
            secondMin = array[i]
        }
    }
    if(firsMin >= secondMin || secondMin === Number.MAX_VALUE) {
        return -1
    }
    return secondMin;
};
console.log(findSecondMinimumValue());

var getNodeValues = function (root, array) {
    if (root !== null) {
        array.push(root.value);
        getNodeValues(root.left, array);
        getNodeValues(root.right, array);
    };

};