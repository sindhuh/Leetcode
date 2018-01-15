console.log(reverseBits(43261596));
function reverseBits(number) {
    var binaryNumber = number.toString(2);
    var zeros = 32 - binaryNumber.length;
    for(var i = 0 ; i  < zeros ; i++) {
        binaryNumber = "0" + binaryNumber;
    }
    binaryNumber = binaryNumber.split("").reverse().join("");
    return parseInt(binaryNumber, 2);
}