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

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var maxDepth = function(root) {
    if(root === null) {
        return 0;
    } else {
        var leftSideLength = maxDepth(root.left);
        var rightSideLength = maxDepth(root.right);
    }
    if(leftSideLength > rightSideLength) {
        return leftSideLength + 1;
    } else {
        return rightSideLength + 1
    }
};