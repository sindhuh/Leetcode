var firstBadVersion = function (num) {
    var start = 0;
    var end = num - 1;
    var mid = parseInt((start + end)/ 2);
    while(start <= end) {
        if(isBadVersion(mid)) {
           end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start
};
