function isPalindrome(string) {
    var reverse_string = string.split("").reverse().join("");
    if(reverse_string === string) {
        return true;
    } else {
        return false;
    }
}

function longestPalindromeSubstring(string) {
    var max_length = 0;
    var max_length_substring = "";

    if(string.length <= 0) {
        return ""
    }

    if(string.length === 1) {
        return string
    }


    if(isPalindrome(string)) {
        return string;
    }

    for(var i = 0; i < string.length ; i++) {
        var substring = string.substring(i, string.length);
        for(var j = substring.length; j >= 0 ; j--) {
           var sub_substring = substring.substring(0, j);
           if(sub_substring.length > 0) {
               if(isPalindrome(sub_substring)) {
                   if(max_length < sub_substring.length) {
                       max_length = sub_substring.length;
                       max_length_substring = sub_substring;
                   }
               }
           }
        }
    }
    return max_length_substring;

}

console.log(longestPalindromeSubstring("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))