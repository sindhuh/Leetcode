/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if(head === null || head.next === null) {
        return head;
    }

    if (k === 0) {
        return head;
    }
    var dummyNode = new ListNode(0);
    dummyNode.next = head;
    for (var i = 0; i < k; i++) {
        var currentHead = dummyNode.next;
        var temp = dummyNode;
        while (temp.next !== null && temp.next.next !== null) {
            temp = temp.next;
        }
        var rotateNode = temp.next;
        temp.next = null;
        dummyNode.next = rotateNode;
        rotateNode.next = currentHead;
    }
    return dummyNode.next;
};