/**
 * Created by sindhuhari on 2/1/18.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null || head.next === null) {
        return false;
    }
    var slowHead = head;
    var fastHead = head.next;
    while (slowHead !== fastHead) {
        if(fastHead === null || fastHead.next === null) {
            return false;
        }
        slowHead = slowHead.next;
        fastHead = fastHead.next.next;
    }
    return true
};