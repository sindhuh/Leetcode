    var number = 123;
    var reverseNumber = "";
    var remainNumber = 0;
    var modValue = 0;
    console.log(main(number));
    function main(num) {
        var sign = "";
        var result = 0;
        if(num < 0) {
            sign = "-";
            num = Math.abs(num);
        }
        if(num == 0) {
            return 0;
        }
        reverseInteger(num);
        if(sign == "-") {
            result = -Math.abs(parseInt(reverseNumber));
            return result;
        } else {
            result = Math.abs(parseInt(reverseNumber))
            return result;
        }
    }
    function reverseInteger(num){
        if(num == 0) {
            return 0;
        }
        modValue = num % 10;
        reverseNumber = "" + reverseNumber + modValue;
        remainNumber = parseInt(num / 10);
        console.log("mod value : " +modValue +"  "+reverseNumber+ " " +num + " " +remainNumber )

        reverseInteger(remainNumber);
    }
