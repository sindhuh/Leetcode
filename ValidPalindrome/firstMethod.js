var s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
function  isPalindrome(s) {
    if(s.length == 0 || s.length == undefined) {
        return false;
    }
    var reverseString;
    s = s.replace(/[^a-zA-Z0-9]/g, "");
    reverseString = s.split("").reverse().join("");
    return reverseString.toLowerCase() == s.toLocaleLowerCase();

}