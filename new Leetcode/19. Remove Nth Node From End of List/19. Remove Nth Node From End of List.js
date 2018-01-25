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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var getLength = function (head) {
    var count = 0;
    while (head) {
        count = count + 1;
        head = head.next
    }
    return count;
}
var removeNthFromEnd = function (head, n) {
    if(n <= 0) {
        return head;
    }
    var lengthOfList = getLength(head);
    var start = lengthOfList - n + 1;
    var count = 0;
    if(start === 1) {
        return head.next;
    }

    var tempNode = head;
    while (tempNode !== null) {
        count = count + 1;
        if (count === start - 1) {
            tempNode.next = tempNode.next.next;
        }
        tempNode = tempNode.next;
    }
    return head
};

function LinkedList() {
    this.head = null;
    this.last = null;
    this.add = function (val) {
        if (this.head === null) {
            this.head = val;
        } else {
            this.last.next = val;
        }
        this.last = val
    };

    this.getHead = function () {
        return this.head;
    }
}

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

//console.log(createList([1,2,3,4,5]));

console.log(removeNthFromEnd(createList([1, 2, 3, 4, 5]), 4));