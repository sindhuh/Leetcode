var isBalanced = function (root) {
    if (root === null) {
        return true;
    } else {
        var heightOfleftTree = getHeight(root.left);
        var heightOfRightTree = getHeight(root.right);
    }
    return Math.abs(heightOfleftTree - heightOfRightTree) <= 1
        && isBalanced(root.left) && isBalanced(root.right);

};
var getHeight = function (node) {
    if (node === null) {
        return 0;
    } else {
        var heightOfleftTree = getHeight(node.left);
        var heightOfRightTree = getHeight(node.right);
        return 1 + Math.max(heightOfleftTree, heightOfRightTree)
    }
};