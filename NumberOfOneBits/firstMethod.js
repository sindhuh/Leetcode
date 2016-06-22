console.log(hammingWeight(1));
function hammingWeight(number) {
    var count = 0;
    var binaryNumber = number.toString(2);
    var zeros = 32 - binaryNumber.length;
    for(var i = 0 ; i  < zeros ; i++) {
        binaryNumber = "0" + binaryNumber;
    }
    for(var j = 0; j < binaryNumber.length ; j++){
      //  console.log(binaryNumber[j])
        if(binaryNumber[j] == "1") {
            count  = count + 1;
        }
    }
    return count;
}