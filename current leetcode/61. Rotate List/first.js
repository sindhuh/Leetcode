var rotateRight = function(head, k) {
    if(k === 0 ){
        return;
    }
    if(getCount(head) <= 0) {
      return
    }
    var temp = head;
    var count = 1;
    while (count < k && temp !== null) {
        temp = temp.next;
        count = count + 1;
    }

    if(temp === null){
        return;
    }

    var targetNode = temp;

    while (temp.next !== null) {
        temp = temp.next;
    }

    temp.next = head;
    head = targetNode.next;
    targetNode.next = null;

    return head;

};

function getCount(head) {
    var temp = head;
    var count = 0;
    while (temp !== null) {
        count = count + 1;
        temp = temp.next;
    }
    return count;
}