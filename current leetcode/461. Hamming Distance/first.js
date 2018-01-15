var hammingDistance = function(x, y) {
    var binaryStringX = (+x).toString(2);
    var binaryStringY = (+y).toString(2);
    var distance = 0;
    var  i = binaryStringX.length - 1;
    var j = binaryStringY.length -  1;

    while(i >= 0 || j>= 0) {
        if(binaryStringY[j] !== binaryStringX[i]) {
            if(binaryStringY[j] && binaryStringX[i]) {
                distance = distance + 1;
            } else if(binaryStringY[j] === "1" && !binaryStringX[i]) {
                distance = distance + 1;
            } else if(!binaryStringY[j] && binaryStringX[i] === "1") {
                distance = distance + 1;
            }
        }

        i = i - 1;
        j = j - 1;
    }

    return distance;
};
console.log(hammingDistance(1, 4));