/**
 * Created by sindhuhari on 2/12/18.
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
var isPalindrome = function (head) {
    var result = true;
    if(head !== null && head.next !== null ) {
        var middle = getMiddleNode(head);
        var secondlist = middle.next;
        middle.next = null;
        secondlist = reverseLinkedList(secondlist);
        while (head !== null || secondlist !== null) {
            if(head.val !== secondlist.val) {
                result = false;
                return result;
            }
            head = head.next;
            secondlist = secondlist.next;
            if(head !== null && secondlist === null && head.next === null) {
                result = true;
                return result
            }
        }
    }

    return result;
};

var reverseLinkedList = function (node) {
    var current = head;
    var end = null;
    while(current !== null) {
        var temp = current.next;
        current.next = end;
        end = current;
        current = temp;
    }
    node = end;
    return node;
};

var getMiddleNode = function (head) {
    var slow = head;
    var fast = head.next;
    while (fast !== null) {
        fast = fast.next;
        if (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }
    }
    return slow;
};