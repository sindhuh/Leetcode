console.log(reverseVowels("nageshwara"))
function reverseVowels(s) {
    var array = s.split("");
    var index = [];
    var vowelsInString = [];
    for(var i =0 ; i < s.length ; i ++) {
        if(isVowel(array[i])) {
            vowelsInString.push(array[i]);
            index.push(i);
        }
    }
    for(var i = 0; i < index.length ; i ++) {
        array[index[i]] = vowelsInString.pop();
    }
    return array.join("");
}

function isVowel(s) {
    return (/^[aeiouAEIOU]$/i).test(s);
}