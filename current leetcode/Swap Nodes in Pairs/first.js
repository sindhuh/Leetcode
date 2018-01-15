function ListNode(val) {
    this.val = val;
    this.next = null;
}

var swapPairs = function (head) {
    var firstNode = head;
    var secondNode = head.next;
    var dummyNode = new ListNode(0);
    var pre = dummyNode;
    while(firstNode !== null && secondNode !== null) {
        pre.next = secondNode;
        pre = firstNode;

        var tempNode = secondNode.next;
        secondNode.next = firstNode;
        firstNode.next = tempNode;
        firstNode = firstNode.next;
        if (tempNode !== null) {
            secondNode = tempNode.next
        }
    }
    return dummyNode.next;
};