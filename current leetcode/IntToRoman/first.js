var intToRoman = function(num) {
    var result = "";
    while(num > 0) {
        if(num > 999) {
            result = result + 'M';
            num = num - 1000;
        } else if (num > 499) {
            if(num >= 900) {
                result = result + 'CM';
                num = num - 900
            } else {
                result = result + 'D';
                num = num - 500
            }
        } else if(num > 99) {
            if(num >= 400) {
                result = result + 'CD';
                num = num - 400
            } else {
                result = result + 'C';
                num = num - 100
            }
        } else if(num > 49) {
            if(num > 90) {
                result = result + 'XC';
                num = num - 90
            } else {
                result = result + 'L';
                num = num - 50
            }
        } else if (num >= 40) {
            result = result + 'XL';
            num = num - 40
        }
        else if(num >= 9) {
            if(num === 9) {
                result = result + 'IX';
                num = num - 10
            } else {
                result = result + 'X';
                num = num - 10
            }
        } else if(num >= 4) {
            if(num === 4) {
                result = result + 'IV';
                num = num - 10
            } else {
                result = result + 'V';
                num = num - 5
            }
        } else if(num > 0) {
            result = result + 'I';
            num = num - 1
        }
    }
    return result
};

console.log(intToRoman(91))