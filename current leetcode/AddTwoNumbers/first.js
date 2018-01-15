function ListNode(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.last = null;

    this.add = function(value) {
        if (value === null || !(value instanceof ListNode)) {
            return;
        }
        if (this.head === null) {
            this.head = value;
        } else {
            this.last.next = value;
        }
        this.last = value;
    };

    this.getHead = function() {
        return this.head;
    };
}

//  1,2,3
// l = ListNode(1).
// l.next = ListNode(2)


function addTwoNumbers(l1, l2) {
    var carry = 0;
    var result = new LinkedList();
    while(l1 !== null || l2 !== null) {
        var sum = carry;
        if(l1 !== null) {
            sum = sum + l1.value;
            l1 = l1.next;
        }

        if(l2 !== null) {
            sum = sum + l2.value;
            l2 = l1.next;
        }
        carry = sum / 10;
        result.add(new ListNode(sum % 10))
    }

    if (carry !== 0) {
        result.add(new ListNode(carry));
    }

    return result.getHead();
}

