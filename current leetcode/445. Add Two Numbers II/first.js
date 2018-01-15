/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var head = null;
var addTwoNumbers = function(l1, l2) {
    var list1Size = getSize(l1);
    var list2Size = getSize(l2);
    if(list1Size === list2Size) {
        mergeLists(l1, l2)
    } else {
        var difference = Math.abs(list1Size - list2Size);
        var count = 0;
        if(list1Size > list2Size) {
            head = l1;
            while(head !== null && count < difference) {
                head = head.next;
                count = count + 1
            }
            mergeLists(head, l2);
            propagateCarry(head, l2)
        } else {
            head = l2;
            while(head !== null && count < difference) {
                head = head.next;
                count = count + 1
            }
            mergeLists(head, l1);
            propagateCarry(head, l1)
        }


    }
};

var propagateCarry = function (curr, head) {
    if(head )
};


var getSize = function(head) {

};

var carry = 0;
var result = [];
var mergeLists = function (l1, l2, carry) {
    if(l1 === null) {
        return 0;
    }
    carry = mergeLists(l1.next, l2.next);
    var sum = l1.val + l2.val + carry;
    carry = parseInt(sum / 10);
    sum = sum % 10;
    result.push(sum);
    return carry;
};