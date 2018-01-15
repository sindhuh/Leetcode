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
    var dummyNode = new ListNode(0);
    dummyNode.next = head;
    var temp = dummyNode;
    while(temp.next !== null && temp.next.next !== null) {
        if(temp.next.val === temp.next.next.val) {
            var value = temp.next.val;
            while(temp.next !== null && temp.next.val === value) {
                temp.next = temp.next.next;
            }
        } else {
            temp = temp.next;
        }
    }
    return dummyNode.next;
};