//finding longest palindrome substring in a string

var mainstring = "abcccccced";
var array = mainstring.split("");
var start = 0;
var end = array.length - 1;
var string = mainstring;

while (true) {
    if (string == string.split("").reverse().join("")) {
        console.log("palindrome string : ", string);
        break;
    }
    start = start + 1;
    end = end - 1;
    string = mainstring.substring(start, end + 1);
    if (start == parseInt(array.length / 2)) {
        console.log("there is no palindrome substring in given string");
        break;
    }
}