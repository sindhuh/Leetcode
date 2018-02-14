/**
 * Created by sindhuhari on 2/13/18.
 */
/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function (n) {
        var celebrity = 0;
        for (var i = 1; i < n; i++) {
            if (!knows(i, celebrity)) {
                celebrity = i;
            }
        }
        for (var m = 0; m < n; m++){
            if(m === celebrity) {
                continue;
            }
            if(!knows(m, celebrity) || knows(celebrity, m)) {
                return -1;
            }
        }
        return celebrity;
    };
};