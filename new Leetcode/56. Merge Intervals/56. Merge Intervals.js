function Interval(start, end) {
    this.start = start;
    this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 * */

var merge = function (intervals) {
    var result = [];
    intervals.sort(function(a, b){return a[0] - b[0]});
    result.push(intervals[0]);

    for(var i = 1 ; i < intervals.length ; i++) {
        if(result[result.length - 1][1] > intervals[i][0]) {
            var newInterval = [];
            newInterval.push(result[result.length - 1][0]);
            newInterval.push(intervals[i][1]);
            result[result.length - 1] = newInterval;
        } else {
            result.push(intervals[i])
        }
    }
};

merge([[1,3],[8,10],[2,6],[15,18]])