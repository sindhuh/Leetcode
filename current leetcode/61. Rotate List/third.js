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
  if(head === null || k === 0 || head.next === null) {
      return head
  }
  var slow = head;
  var fast = head;
  while(k > 0) {
      fast = fast.next;
      if(fast === null) {
          fast = head;
      }
      k = k - 1;
  }
  if(fast === null || slow === fast) {
      return head
  }
  while(fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
  }
  var newHead = slow;
  slow.next = null;
  fast.next = head;
  return newHead;
};