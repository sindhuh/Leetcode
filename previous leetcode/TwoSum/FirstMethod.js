var target = 85;
var array = [5, 6, 7, 83, 2, 7, 9, 4, 6, 2, 5, 65, 32, 24, 56, 67];
for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
        var sum = array[i] + array [ j];
        if(sum == target) {
            console.log(">>>> i : " + i + "    >>>> j : " + j);
        }
    }
}