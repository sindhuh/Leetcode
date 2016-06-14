var inputString = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlo" +
    "ngendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfiel" +
    "dasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherf" +
    "angandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecanno" +
    "thallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoo" +
    "rponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverf" +
    "orgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywho" +
    "foughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbe" +
    "foreusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullme" +
    "asureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsder" +
    "Godshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperish" +
    "fromtheearth";

var maxlenth = 0 ;

longestPalindromeSubstring(inputString);
function longestPalindromeSubstring(inputString) {
    var currentPalindrome = "";
    var substring = ""
    for (var i = 0; i < inputString.length; i++) {
        for (var j = i + 1; j < inputString.length; j++) {
            substring = inputString.substring(i, j);
            if(isPalindrome(substring)) {
                currentPalindrome = substring;
                maxlenth = currentPalindrome.length;
            }
        }
    }
    if(currentPalindrome == "") {
        console.log("There is no palindrome in the given string");
    } else {
        console.log("Palindrome String :", currentPalindrome);
    }
}

function isPalindrome(subString) {
    if (subString == subString.split("").reverse().join("")) {
        if(subString.length > maxlenth) {
            return true;
        }
    }
}
