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
var getIntersectionNode = function(headA, headB) {
    var mapping = {};
    var tempHeadA = headA;
    console.log(headA)
    var count = 2;
    while(tempHeadA !== null) {
        mapping[tempHeadA.val] = count;
        tempHeadA = tempHeadA.next;
        count = count + 1;
    }
    console.log(mapping)
    var tempHeadB = headB;
    var intersectNode = null;
    while (tempHeadB !== null) {
        if(mapping[tempHeadB.val]) {
            console.log("reaching here")
            intersectNode = tempHeadB;
            return intersectNode
        }
        tempHeadB = tempHeadB.next;
    }
    return intersectNode
};