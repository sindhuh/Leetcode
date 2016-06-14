var array = [1, 2, 3, 0, 6, 7, 8, 3];
var distance = 9;

if(isDistanceBetweenDuplicates(array, distance)) {
    console.log("true");
} else {
    console.log("false");
}

function isDistanceBetweenDuplicates(array, actualDistance) {
    var num1 = 0 ;
    var num2 = 0 ;
    var distanceBetweenDuplicates = 0;
    if(actualDistance > array.length - 1) {
        return false;
    }
    for ( var i = 0 ; i < array.length ; i ++) {
        num1 = array[i];
        for(var j = i + 1; j < array.length; j ++) {
            num2 = array[j];
            if(array[i] == array[j] ) {
               distanceBetweenDuplicates = j - i;
                if(distanceBetweenDuplicates <= actualDistance) {
                    return true;
                }
            }
        }
    }
    return false;
}
