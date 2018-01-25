console.log(wordBreak("leetcode", ["leet", "code"]))
function wordBreak(s, wordDict)  {
    var isFound = [];
    isFound[0] = true;
    for(var i = 1; i <= s.length ; i++) {
        for(var j = 0 ; j < i ; j++) {
            if(isFound[i] && wordDict.has(s.substring(j, i))) {
                isFound = true;
                break;
            }
        }
    }
    return isFound[s.length] == true;
}