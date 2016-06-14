/**
 * Created by sindhuhari on 5/24/16.
 */
var number = 100;
var dividedBy = 6;
console.log(divideTwoIntegers(number, dividedBy));
function divideTwoIntegers(number, dividedBy) {
    var final = 0;
    var count = 0;
    while(true) {
        final = final + dividedBy;
        count = count + 1;
        if(final >= number) {
            if(final > number) {
                return count - 1;
            }
            return count;
        }
    }
}
