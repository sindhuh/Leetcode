/**
 * Created by sindhuhari on 2/13/18.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) {
        return null
    }
    if (root.val === p.val || root.val === q.val) {
        return root;
    }
    var leftLCA = lowestCommonAncestor(root.left, p, q);
    var rightLCA = lowestCommonAncestor(root.right, p, q);
    if (leftLCA !== null && rightLCA !== null) {
        return root;
    }
    if (leftLCA === null) {
        return rightLCA;
    } else {
        return leftLCA;
    }
};