var isAnagram = function(s, t) {
    if(!s && !t) {
        return true
    }
    if(s.length === 0 && t.length === 0) {
        return true
    }
    if(s.length !== t.length) {
        return false;
    }
    var mapping = {};
    for(var i = 0; i < s.length; i++) {
        if(mapping[s[i]]) {
            mapping[s[i]]  = mapping[s[i]] + 1;
        } else {
            mapping[s[i]] = 1;
        }
    }

    for(var j = 0; j < t.length ; j++) {
        if(mapping[t[j]] && mapping[t[j]] > 0) {
            mapping[t[j]] = mapping[t[j]] - 1
        } else {
            return false
        }
    }
    return true;
};

console.log(isAnagram("a", "a"));