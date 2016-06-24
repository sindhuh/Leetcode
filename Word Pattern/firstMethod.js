console.log(wordPattern("aaaa", "dog dog dog dog"));
function wordPattern(pattern, string) {
    var mapping = {};
    var stringArray = string.split(" ");
    var patternArray = pattern.split("");
    if(stringArray.length != patternArray.length) {
        return false;
    }
    var patternChar = "";
    var stringChar = "";
    for(var i = 0 ; i < stringArray.length; i++) {
        patternChar = patternArray[i];
        stringChar = stringArray[i];
     //   console.log(mapping.hasOwnProperty(mapping[patternChar]));
        if(!mapping[patternChar] && checkKeyValue(stringChar, mapping)) {
            mapping[patternChar] = stringChar;
        } else if(mapping[patternChar] != stringArray[i]) {
            return false;
        }
    }
    return true;
}
function checkKeyValue(string, mapping) {
    for(var key in mapping) {
        if(mapping[key] == string) {
            return false;
        }
    }
    return true;
}