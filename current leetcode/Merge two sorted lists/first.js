var LinkedList = function() {
    this.head = null;
    this.last = null;

    this.add = function (value) {
       if(this.head === null) {
           this.head = value;
       } else {
           this.last.next = value;
       }
       this.last = value
    };
    this.getHead = function () {
        return this.head
    }
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    var node;
    var result = new LinkedList();
    while(l1 !== null || l2 !== null) {
        if(l1 !== null && l2 !== null) {
            if(l1.val <= l2.val) {
                node = new ListNode(l1.val);
                result.add(node)
                l1 = l1.next
            } else {
                node = new ListNode(l2.val);
                result.add(node);
                l2 = l2.next
            }
        } else if(l1 !== null && l2 === null) {
            node = new ListNode(l2.val);
            result.add(node);
            l1 = l1.next;
        } else if(l2 !== null && l1 === null) {
            node = new ListNode(l1.val);
            result.add(node);
            l2 = l2.next
        }
    }
    return result.getHead();
};