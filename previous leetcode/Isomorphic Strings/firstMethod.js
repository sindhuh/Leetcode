console.log(isIsomorphic("egg", "add"));
function isIsomorphic(string1, string2) {
    var string3 = string1.split("");
    var string4 = string2.split("");
    var mapping = {};
    for(var i = 0 ; i < string3.length ; i ++) {
        if(!mapping[string3[i]] && checkKeyValue(string4[i] , mapping)) {
            mapping[string3[i]] = string4[i];
            console.log(">>>" ,mapping[string3[i]]);
            string3[i] = mapping[string3[i]];
            console.log(string3)
        } else {
            string3[i] = mapping[string3[i]];
        }
    }
    console.log(string1, string2);
    return (string3.join("") == string4.join(""));
}

function checkKeyValue(string, mapping) {
    for(var key in mapping) {
        if(mapping[key] == string) {
            return false;
        }
    }
    return true;
}

