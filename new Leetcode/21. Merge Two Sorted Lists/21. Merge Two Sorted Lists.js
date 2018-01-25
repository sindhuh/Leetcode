/**
 * Created by sindhuhari on 1/22/18.
 */
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

var mergeTwoLists = function (l1, l2) {
    var result = new LinkedList();
    var node = null;
    while (l1 !== null || l2 !== null) {
        if (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                node = new ListNode(l1.val);
                result.add(node);
                l1 = l1.next
            } else {
                node = new ListNode(l2.val);
                result.add(node);
                l2 = l2.next
            }
        } else if (l1 == null && l2 !== null) {
            node = new ListNode(l2.val);
            result.add(node);
            l2 = l2.next;
        } else {
            node = new ListNode(l1.val);
            result.add(node);
            l1 = l1.next;
        }
    }
    return result.getHead();
};

var LinkedList = function () {
    this.head = null;
    this.last = null;
    this.add = function (listNode) {
        if (this.head === null) {
            this.head = listNode
        } else {
            this.last.next = listNode
        }
        this.last = listNode
    };

    this.getHead = function () {
        return this.head
    }
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(nums) {
    var result = new LinkedList();
    for (var i = 0; i < nums.length; i++) {
        result.add(new ListNode(nums[i]))
    }
    return result.getHead();
}


var printArray = function (head) {
    while (head) {
        console.log(head.val);
        head = head.next
    }
};
console.log(printArray(mergeTwoLists(createList([1, 2, 4]), createList([1, 3, 4]))))
