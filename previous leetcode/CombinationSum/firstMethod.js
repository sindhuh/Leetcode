var arraySet = [1, 2, 3, 4, 5];
var target = 8;

getCombinations(arraySet, target);

function getCombinations(arraySet, target) {
    var holdCombinations = [];
    var targetSets = [];
    for (var i = 0; i <  arraySet.length; i ++) {
        for(var j = i; j < arraySet.length; j++) {
            holdCombinations.push(arraySet[j]);
            console.log("holdCombinations :" , holdCombinations);
            getSet(holdCombinations);
        }
        holdCombinations = [];
    }
}

function getSet(combination) {
    var set = [];
    var sum = 0;
    if(combination.pop() > target) {
        return [];
    }

    if(combination.length == 1 && target % combination[0] == 0) {
            for(var k = 0 ; k < target / combination[0] ; k++) {
                set.push(combination[0]);
            }
        return set;
    } else {
        for (var i = combination.length - 1; i >= 0 ; i --) {
            sum = sum + combination[i];
            if(sum > target  && i != 0) {
                return [];
            }
            if(sum < target && i == 0) {
                
            }
        }
    }
}
