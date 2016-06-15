console.log(reverseBits(43657890))
function reverseBits(number) {
    var binaryNumber = number.toString(2);
    return "0000000" + binaryNumber
}