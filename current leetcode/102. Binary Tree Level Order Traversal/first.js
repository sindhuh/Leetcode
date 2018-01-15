/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) {
        return [];
    }
    var result = [];
    var rootHeight = getHeight(root)
    preorderTraversal(root, result, rootHeight);
    return result;
};

var preorderTraversal = function (root, result, rootHeight) {
    if(root === null) {
        return;
    }
    var height = getHeight(root);
    if(result[rootHeight - height]) {
        result[rootHeight - height].push(root.val);
    } else  {
        result[rootHeight - height] = [];
        result[rootHeight - height].push(root.val);
    }
    preorderTraversal(root.left, result, rootHeight);
    preorderTraversal(root.right, result, rootHeight);
};

var getHeight = function (root) {
    if(root === null) {
        return 0;
    }
    var leftHeight = getHeight(root.left);
    var rightHEight = getHeight(root.right);
    if(leftHeight > rightHEight) {
        return leftHeight + 1;
    } else {
        return rightHEight + 1;
    }
};