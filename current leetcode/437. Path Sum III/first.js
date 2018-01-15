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
 * @return {number}
 */
var count = 0;
var pathSum = function(root, sum) {
    if(root === null) {
        return 0;
    }

    helper(root, sum);
    pathSum(root.left, sum);
    pathSum(root.right, sum);
    return count;
};

var helper = function (node, sum) {
    if(node === null) {
        return;
    }

    if(sum - node.val === 0) {
        count = count + 1;
    }

    helper(node.left, sum - node.val);
    helper(node.right, sum - node.val);
};