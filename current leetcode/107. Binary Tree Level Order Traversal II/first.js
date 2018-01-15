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
var levelOrderBottom = function(root) {
    if(root === null) {
        return [];
    }
    var result = [];
    var rootHeight = getHeight(root)
    for(var i = 0 ; i < rootHeight; i++) {
        traverseAndPrint(root, i, i+1, result)
    }
    return result.reverse();
};

var traverseAndPrint = function (root, actualLevel, level, result) {
    if(root === null) {return}
    if(level === 1) {
        if(result[actualLevel]) {
            result[actualLevel].push(root.val);
        } else {
            result[actualLevel] = [];
            result[actualLevel].push(root.val);
        }
    } else {
        traverseAndPrint(root.left, actualLevel, level - 1, result);
        traverseAndPrint(root.right, actualLevel, level - 1, result);
    }
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
