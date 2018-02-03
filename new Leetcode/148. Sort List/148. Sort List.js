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
 * @return {ListNode}
 */
var sortList = function (head) {
    return divide(head)
};


var divide = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    var middle = getMiddleNode(head);
    var middleNext = middle.next;
    middle.next = null;
    var leftLinkedList = divide(head);
    var rightLinkedList = divide(middleNext);
    return merge(leftLinkedList, rightLinkedList)
};

var getMiddleNode = function (head) {
    var slowHead = head;
    var fastHead = head.next;
    while (fastHead !== null) {
        fastHead = fastHead.next;
        if (fastHead !== null) {
            fastHead = fastHead.next;
            slowHead = slowHead.next;
        }
    }
    return slowHead;
};

var merge = function (head1, head2) {
    if (head1 === null || head2 === null) {
        return head1 || head2;
    }

    var result = null;
    if(head1.val < head2.val) {
        result = head1;
        result.next = merge(head1.next, head2)
    } else {
        result = head2;
        result.next = merge(head1, head2.next);
    }
    return result;
};