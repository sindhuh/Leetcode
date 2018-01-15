var isSymmetric = function(root) {
    if(root !== null) {
        checkIsSymmetricOrNot(root.left, root.right);
    }
};

var checkIsSymmetricOrNot = function (node1, node2) {
    if(node1 === null && node2 === null) {
        return true;
    }
    if(node1 !== null && node2 !== null && node1.val === node2.val) {
        return checkIsSymmetricOrNot(node1.left, node2.right) && checkIsSymmetricOrNot(node1.right, node2.left);
    }
    return false;
};