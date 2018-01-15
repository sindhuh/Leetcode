var longestSubsString = function (s) {
    var start = 0;
    var max = 0;
    var map = {};
    if(!s) {
        return -1;
    }

    if(s.length === 0) {
        return 0
    }

    if(s.length === 1) {
        return 1
    }

    for(var i = 0 ; i < s.length; i++) {

        if(map[s[i]] > -1) {
            if(map[s[i]] >= start) {
                start = map[s[i]] + 1;
            }
        }
        map[s[i]] = i;
        max = Math.max(max, i - start + 1)
    }

    return max
};
console.log(longestSubsString('abab'))