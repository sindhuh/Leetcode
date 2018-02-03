/**
 * Created by sindhuhari on 2/2/18.
 */
console.log(hammingWeight(1));
function hammingWeight(number) {
    var count = 0;
    var binaryNumber = number.toString(2);
    for(var j = 0; j < binaryNumber.length ; j++){
        if(binaryNumber[j] == "1") {
            count  = count + 1;
        }
    }
    return count;
}