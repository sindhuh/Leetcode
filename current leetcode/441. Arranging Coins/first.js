/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var rows = 0;
    if(!n || n === 0) {
        return rows;
    }

    var requiredSteps = 0;
    while (n > 0) {
        if(n > requiredSteps) {
            requiredSteps = requiredSteps + 1;
            n = n - requiredSteps;
            rows = rows + 1;
        } else {
            n = 0;
        }
    }
    return rows;
};

console.log(arrangeCoins(5));