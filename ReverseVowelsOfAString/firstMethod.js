/**
 * Created by sindhuhari on 6/16/16.
 */
var s = "nageshwara";
console.log(reverseVowels(s));
function reverseVowels(s) {
    var array = s.split("");
    var i = 0;
    var j = array.length - 1;
    var mid = Math.floor(i + j) / 2 ;
    var temp = "";
    while(i <=  mid) {
        if(isVowel(array[i]) && isVowel(array[j])) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i = i + 1;
            j = j - 1;
        } else {
            if(!isVowel(array[i])){
                i = i + 1;
            }
            if(!isVowel(array[j])){
                j = j - 1;
            }
        }
    }
    return array.join("");
}

function isVowel(s) {
    return (/^[aeiou]$/i).test(s);
}