/**
 * Created by sindhuhari on 5/24/16.
 */
var number = -2147483648;
var dividedBy = -1;
console.log(divideTwoIntegers(number, dividedBy));
function divideTwoIntegers(number, dividedBy) {
    var sign = "";
    if(number < 0 || dividedBy < 0) {
        sign = "-";
        number = Math.abs(number);
        dividedBy = Math.abs(dividedBy);
    }
    if(number < 0 && dividedBy < 0) {
        sign = "";
    }
    var final = 0;
    var count = 0;
    if(number == 1 && dividedBy == 1 || number == -1 && dividedBy == 1 ||
        number == 1 && dividedBy == -1 || number == -1 && dividedBy == -1 ) {
        console.log(sign);
        if(sign == "-") {
            console.log("rea")
            return -1;
        } else {
            return 1;
        }
    }
    while(true) {
        final = final + dividedBy;
        count = count + 1;
        console.log(final);
        if(final >= number) {
            if(final > number) {
                if(sign == "-") {
                    return -Math.abs(count - 1);
                } else {
                    return count - 1;
                }
            }
            if(sign == "-") {
                return Math.abs(count);
            } else {
                return count;
            }
        }
    }
}
