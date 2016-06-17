console.log(isHappy(19))
    function isHappy(number) {
        var hashMap = [];
        var value = number;
        if(number == null) {
            return false;
        }
        while (!hashMap[value]) {
            console.log("while : " ,value)
            if(value == 1) {
                return true;
            }
            hashMap[value] = true;
            value = getNumberAfterSquaring(value);
        }
        return false;
    }

    function getNumberAfterSquaring(number) {
        var value = 0;
        var digit = 0;
        while(!(number == 0)){
            digit = number % 10;
            number = parseInt(number / 10);
            value = value + (digit * digit);
        }
        console.log(value);
        return value;
    }