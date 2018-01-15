/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumOfLeftLeaves = function (node) {
    var result = 0;
    if (node !== null) {
        if (isLeafOrNot(node.left)) {
            result = result + node.left.val;
        } else {
            result = result + sumOfLeftLeaves(node.left)
        }
    }
    result = result + sumOfLeftLeaves(node.right);
    return result;
};

var isLeafOrNot = function (node) {
    if (node === null) {
        return false
    }
    return node.right === null && node.left === null;
};

