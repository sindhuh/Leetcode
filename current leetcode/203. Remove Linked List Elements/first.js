/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var dummyHead = new ListNode(0);
    dummyHead.next = head;
    var tempHead = dummyHead;

    while(tempHead.next !== null) {
        if(tempHead.next.val === val) {
            if(tempHead.next !== null) {
                tempHead.next = tempHead.next.next;
            }
        } else {
            tempHead = tempHead.next;
        }
    }
    return dummyHead.next;
};