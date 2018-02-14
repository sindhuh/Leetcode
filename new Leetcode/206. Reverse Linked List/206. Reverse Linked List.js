/**
 * Created by sindhuhari on 2/7/18.
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    var current = head;
    var end = null;
    while (current !== null) {
        var temp = current.next;
        current.next = end;
        end = current;
        current = temp;
    }
    head = end;
    return head;
};