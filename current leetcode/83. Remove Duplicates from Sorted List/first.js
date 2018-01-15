/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var temp = head;
    while(temp !== null && temp.next !== null) {
        if (temp.next.val === temp.val) {
            temp.next = temp.next.next;
        }
        else {
           temp = temp.next;
       }
    }
    return head;
};