/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root === null) {
        return sum === 0;
    } else {
        var result = false;
        var subSum = sum - root.val;
        if(subSum === 0 && root.left === null && root.right === null) {
            return true;
        }

        if(root.left !== null) {
            result = result || hasPathSum(root.left, subSum);
        }

        if (root.right !== null) {
            result = result || hasPathSum(root.right, subSum);
        }
        return result
    }
};