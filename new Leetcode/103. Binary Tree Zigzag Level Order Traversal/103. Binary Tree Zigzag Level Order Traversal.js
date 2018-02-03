/**
 * Created by sindhuhari on 1/30/18.
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
var zigzagLevelOrder = function (root) {
    if (root === null) {
        return []
    }
    var rootHeight = getHeight(root);
    var result = [];
    var leftToRight = true;
    for (var i = 0; i < rootHeight; i++) {
        traverseTree(root, i, i + 1, result, leftToRight)
        leftToRight = !leftToRight;
    }
    return result;

};


var traverseTree = function (root, index, level, result, leftToRight) {
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
    } else if(level > 1){
        if (leftToRight) {
            traverseTree(root.left, index, level - 1, result, leftToRight);
            traverseTree(root.right, index, level - 1, result, leftToRight)
        } else {
            traverseTree(root.right, index, level - 1, result, leftToRight);
            traverseTree(root.left, index, level - 1, result, leftToRight)
        }
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