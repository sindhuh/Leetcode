var reverseWords = function(str) {
    if(!str || str.length === 0) {
        return ""
    }
    var strArray = str.split(" ");
    var i = 0 ;
    var j = str.length - 1;
    var temp;
    while(i < str.length) {
        if(i === j) {
            str = strArray.join(" ")
            return;
        } else {
            temp = strArray[j];
            strArray[j] =  strArray[i];
            strArray[i] = temp;
            i = i + 1;
            j = j - 1;
        }
    }
};
reverseWords("a");