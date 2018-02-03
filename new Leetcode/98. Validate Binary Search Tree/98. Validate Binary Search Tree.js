/**
 * Created by sindhuhari on 1/29/18.
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    return checkIsValidBST(root, Number.MIN_VALUE, Number.MAX_VALUE)
};

var checkIsValidBST = function (root, min, max) {
    if (root === null) {
        return true;
    }

    if (root.val < min || root.val > max) {
        return false;
    }

    return checkIsValidBST(root.left, min, root.val) && checkIsValidBST(root.right, root.val, max);
};


