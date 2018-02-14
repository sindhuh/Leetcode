/**
 * Created by sindhuhari on 2/4/18.
 */
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
    var height = getHeight(root);
    var result = [];
    for (var i = 0; i < height; i++) {
        traverseTree(root, i, i + 1, result)
    }
    return result;

};


var traverseTree = function (root, index, level, result) {
    if (root === null) {
        return;
    }
    if (level === 1) {
        if (result[index]) {
            result[index].push(root.val);
        } else {
            result[index] = [];
            result[index].push(root.val);
        }
    } else {
        traverseTree(root.left, index, level - 1, result);
        traverseTree(root.right, index, level - 1, result)
    }
};

var getHeight = function (root) {
    if (root === null) {
        return 0;
    } else {
        var lheight = getHeight(root.left);
        var rheight = getHeight(root.right);
        if (lheight > rheight) {
            return lheight + 1;
        } else {
            return rheight + 1;
        }
    }

}