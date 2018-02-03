/**
 * Created by sindhuhari on 1/30/18.
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if(root === null) {
        return []
    }
    var rootHeight = getHeight(root);
    var result = [];
    for (var i = 0; i < rootHeight; i++) {
        result[i] = traverseTree(root, i);
    }
    return result;

};

var traverseTree = function (root, level) {
    var result = [];
    _traverseTree(root, level, result);
    return result;
};

var _traverseTree = function (root, level, result) {

    if (root === null) {
        return;
    }

    if (level === 0) {
        result.push(root.val);
        return;
    }

    traverseTree(root.left, level - 1, result);
    traverseTree(root.right, level - 1, result);
};

var getHeight = function (root) {
    if (root === null) {
        return 0;
    }
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};