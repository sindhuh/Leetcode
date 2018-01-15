/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    var result = 0;
    console.log(A.indexOf(B));
    while(A.indexOf(B) < 0 ) {
        if(A.length > 10000) {
            return  - 1
        }
        console.log(A, B, A.indexOf(B))
        result = result + 1;
        A = A + A;
    }
    return result + 1;
};
console.log(repeatedStringMatch("bb", "cdabcdab"))