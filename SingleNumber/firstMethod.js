console.log(singleNumber([2,5,4,6,2,3,5,6,4]))
function singleNumber(A) {
    var length = A.length,
        i,
        result = 0;
    if (length === 1) {
        return A[0];
    }
    for (i = 0; i < length; i++) {
        result = result ^ A[i];
        console.log(result)
    }
    return result;
};
