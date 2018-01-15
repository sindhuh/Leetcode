
var isPalindrome = function(head) {
    if(head === null || head.next === null) {
        return true
    }
    var stack = [];
    var temp = head;
    while (temp !== null) {
       stack.push(temp.val);
       temp = temp.next;
    }

    var start = 0;
    var end = stack.length - 1;
    while (start < end) {
        if(stack[start] !== stack[end]) {
            return false;
        } else {
            start = start + 1;
            end = end - 1;
        }
        return true
    }
};

