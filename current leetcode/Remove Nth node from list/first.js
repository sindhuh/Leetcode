function ListNode(val) {
    this.val = val;
    this.next = null;
}


function getCount(head) {
    var count = 0;
    var temp = head;
    while (temp !== null) {
        count = count + 1;
        temp = temp.next;
    }
    return count;
}

var removeNthFromEnd = function(head, n) {
    if(n <= 0) {
        return head;
    }

    var count=0;
    var length = getCount(head);
    var start = length-n+1;
    if(start === 1) {
        return head.next;
    }
    var tempNode = head;
    while(tempNode !== null) {
        count = count + 1;
        if(count === start - 1) {
            tempNode.next = tempNode.next.next;
        }
        tempNode = tempNode.next;
    }
    return head;
};

