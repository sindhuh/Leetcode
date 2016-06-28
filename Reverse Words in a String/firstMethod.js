console.log(reverseWords("   a   b "));
function reverseWords(s) {
    var array = s.trim().split(" ").reverse();
    console.log(array)
    var result = "";
    for (var i = 0; i < array.length ; i++) {
        console.log(array[i] == '');
        if (array[i] != '') {
            result = result + " " +array[i]
        }
    }
    return result.trim();
}