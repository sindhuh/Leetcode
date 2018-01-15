var longestUnivaluePath = function(root) {
    var result = 0;
    getLength(root, result)
    return result;
};

var getLength =  function (node, result) {
    if(node === null) {
        return 0;
    }
    var leftLength = getLength(node.left, result);
    var rightLength = getLength(node.right, result);
    var left = 0;
    var right = 0;
    if(node.left && node.val === node.left.val) {
        left = leftLength + 1;
    }
    if(node.right && node.val === node.right.val) {
        right = rightLength + 1;
    }

    result = Math.max(result, left+right);
    return Math.max(left, right)
};