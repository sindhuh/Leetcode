    var number = 123;
    console.log(reverse(number));
    function reverse(num) {
        var sign = "";
        if(num < 0) {
            sign = "-";
            num = Math.abs(num);
        }
        if(num == 0) {
            return 0;
        }
        var result = reverseInteger(num);
        if(sign == "-") {
            result = -Math.abs((result));
            return result;
        } else {
            result = Math.abs((result))
            return result;
        }
    }
    function reverseInteger(num){
        var result = 0;
        var reminder = 0;
        while (num != 0) {
            reminder = num % 10;
           result = result * 10 + reminder;
            num = Math.floor(num / 10);
        }
        if (result >= 2147483648) {
            return 0;
        }
        return result;
    }
