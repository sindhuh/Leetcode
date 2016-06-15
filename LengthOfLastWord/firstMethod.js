var string = "  Hello World    ";
console.log(lengthOfLastWord(string));
        function lengthOfLastWord(string) {
            var count = 0;
            for(var i = string.length - 1 ; i >= 0 ; i--) {
                if(string[i] == " " && count != 0) {
                    return count;
                } else {
                    if(string[i] != " ") {
                        count = count + 1;
                    }
                }
            }
            return count;
        }
