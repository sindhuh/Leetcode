console.log(maxProduct([""]));
function maxProduct(words) {
    var maxProductLength = 0;
    var productLength = 0;
    for(var i = 0 ; i < words.length ; i ++) {
        for(var j = i + 1 ; j < words.length ; j++) {
            if(!haveCommonLetters(words[i], words[j])) {
                productLength = words[i].length * words[j].length;
                if(productLength > maxProductLength) {
                    maxProductLength = productLength;
                }
            }
        }
    }
    return maxProductLength;
}

function haveCommonLetters(word1 , word2) {
    var maxLengthWord = "";
    var minLengthWord = "";
    var maxLength = Math.max(word1.length , word2.length);
    var minLength = Math.min(word1.length, word2.length);
    if(word1.length > word2.length) {
         maxLengthWord = word1;
         minLengthWord = word2;
    } else {
        maxLengthWord = word2;
        minLengthWord = word1;
    }
    for(var i = 0 ; i < maxLength ; i++) {
        for(var j = 0 ; j < minLength ; j++) {
            if(maxLengthWord[i] == minLengthWord[j]) {
                return true;
            }
        }
    }
    return false;
}