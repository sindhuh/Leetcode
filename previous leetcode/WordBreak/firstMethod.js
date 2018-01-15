console.log(wordBreak("leetcode",["leet","code"]));
function wordBreak(s, wordDict) {
    var result = "";
    var isBreakable = false;
    for(var i = 0 ; i < s.length ; i++) {
        result = result + s[i];
        if(haveValueInDIct(result, wordDict)) {
            console.log(result);
            isBreakable = true;
            result = "";
        } else {
            console.log(">>>>> ", result);
            isBreakable = false;
        }
    }
    return isBreakable;
}

function haveValueInDIct(value, dict) {
    for(var key in dict){
        if(dict[key] == value) {
            return true;
        }
    }
    return false;
}
