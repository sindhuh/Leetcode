/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    var map = [];
    var tempHeadA = headA;
    while (tempHeadA !== null) {
        map[tempHeadA] = true;
        tempHeadA = tempHeadA.next;
    }

    var tempHeadB = headB;
    console.log(map)
    while (tempHeadB !== null) {
        if (map[tempHeadB]) {
            return tempHeadB;
        }
        tempHeadB = tempHeadB.next;
    }
    return null;

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

console.log(getIntersectionNode(createList([1,3,5,7,9,11,13,15,17,19,21]), createList([2])))