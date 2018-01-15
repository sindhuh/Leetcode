console.log(countBits(85723));
function countBits(num) {
    var resultArray = [];
    var result = 0;
    for(var i = 0 ; i <= num ; i++) {
        result = countNoOfOnes(i);
        resultArray.push(result);
    }
    return resultArray;
}

function  countNoOfOnes(num) {
    var count = 0;
    var binaryNum = num.toString(2);
    for(var i = 0 ; i < binaryNum.length ; i++) {
        if(binaryNum[i] == "1") {
            count = count + 1;
        }
    }
    return count;
}