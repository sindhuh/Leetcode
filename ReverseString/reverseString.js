console.log(reverseString("sindhu"))
function reverseString(string) {
    if(string.length == null) {
        return null;
    }
    return string.split("").reverse().join("");
}
