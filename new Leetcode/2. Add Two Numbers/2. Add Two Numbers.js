/**
 * Created by sindhuhari on 1/20/18.
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
var addTwoNumbers = function (l1, l2) {
    var carry = 0;
    var result = new LinkedList();
    while (l1 !== null || l2 !== null) {
        var sum = 0;
        if (l1 !== null) {
            //console.log('l1 :', l1.val)

            sum = sum + l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            //console.log('l2 :', l2.val)

            sum = sum + l2.val;
            l2 = l2.next;
        }

        sum = sum + carry;
        //console.log('sum :', sum)
        carry = parseInt(sum / 10);
        //console.log('carry :', carry)

        result.add(new ListNode(sum % 10))
    }
    if (carry > 0) {
        result.add(new ListNode(carry));
    }
    return result.getHead();
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

//console.log(createList([2, 4, 3]), createList([5, 6, 4]))

console.log(addTwoNumbers(createList([2,4,3]), createList([5,6,4])))