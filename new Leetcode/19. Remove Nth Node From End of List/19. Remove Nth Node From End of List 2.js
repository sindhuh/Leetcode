/**
 * Created by sindhuhari on 2/6/18.
 */


var removeNthFromEnd = function (head, n) {
    var toBeRemoved = head;
    var current = head;
    var count = 0;
    while (current !== null) {
        if(count > n) {
            toBeRemoved = toBeRemoved.next;
        }
        current = current.next;
        count = count + 1;
    }

    if(count > n) {
        toBeRemoved.next = toBeRemoved.next.next
    }
    return head;
};