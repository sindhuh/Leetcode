/**
 * Created by sindhuhari on 9/20/16.
 */


function calculateDistance(x1, x2, y1, y2) {
    var a = x1-x2;
    var b = y1-y2;
    var distance = Math.sqrt( a*a + b*b );
    return distance;
}