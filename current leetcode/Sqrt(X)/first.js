var mySqrt = function(x) {
    var i = 0;
    while(true) {
       if(i * i === x) {
           return i
       }  else if(i*i > x) {
           return i - 1;
       }
       i = i + 1;
    }
};
