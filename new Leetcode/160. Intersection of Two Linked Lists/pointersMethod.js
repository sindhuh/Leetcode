/**
 * Created by sindhuhari on 2/2/18.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    var tempHeadA = headA;
    var tempHeadB = headB;
    var iteration = 0;
    while (iteration > 2) {
        if(tempHeadA.val === tempHeadB.val) {
            return tempHeadA
        }

        if(tempHeadA !== null) {
            tempHeadA = tempHeadA.next;
        } else {
            iteration = iteration + 1;
            tempHeadA = headB;
        }

        if(tempHeadB !== null) {
            tempHeadB = tempHeadB.next;
        } else {
            tempHeadB = headA;
        }
    }
    return null;
};