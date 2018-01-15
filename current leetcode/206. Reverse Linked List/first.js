var reverseList = function(head) {
    if(head === null || head.next === null) {
        return head;
    }
    var next = null;
    var current = head;
    var previous = null;
    while(current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    head = previous;
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createNewLinkedList() {

}