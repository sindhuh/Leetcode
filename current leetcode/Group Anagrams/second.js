var groupAnagrams = function (strs) {
    if(!strs || strs.length === 0) {
        return [];
    }
    var mapping = {};
    var oldArray = strs.slice();
    var sortStrings = strs;
    var result = [];
    for(var i = 0; i < sortStrings.length; i++) {
        sortStrings[i] = sortString(sortStrings[i]);
        if(mapping[sortStrings[i]]) {
            mapping[sortStrings[i]].push(i)
        } else {
            mapping[sortStrings[i]] = [];
            mapping[sortStrings[i]].push(i)
        }
    }
    for(var key in mapping) {
        var group = [];
        for(var value = 0 ; value < mapping[key].length; value++) {
            var index = oldArray[mapping[key][value]];
            group.push(index)
        }
        result.push(group)
    }
    return result
};

var sortString = function(text) {
    return text.split('').sort().join('');
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])