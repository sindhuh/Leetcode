var array = [-1, 0, 1, 2, -1, -4];
console.log("three sum sets : " , threeSum(array))
function threeSum(array) {
    var sets = [];
    var set = "";
    var number1 = 0;
    var number2 = 0;
    var number3 = 0;
    var sum = 0;
    for(var i = 0 ; i < array.length ; i ++) {
        number1 = array[i];
        for(var j = i + 1 ; j <  array.length ;  j++) {
            number2 = array[j];
            for(var k = j + 1; k < array.length ; k++) {
                number3 = array[k];
                sum = number1 + number2 + number3;
                if(sum == 0) {
                    if(number1 >= number2 && number2 >= number3) {
                        set = "(" + number3 + "," + number2 + "," + number1 + ")";
                    } else if(number2 >= number1 && number1 >= number3) {
                        set = "(" + number3 + "," + number1 + "," + number2 + ")";
                    } else {
                        set = "(" + number1 + "," + number2 + "," + number3 + ")";
                    }

                    if(sets.indexOf(set) == -1) {
                        sets.push(set);
                    }
                }
            }
        }
    }
    return sets;
}
