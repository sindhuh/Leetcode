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

    var result = [];
    var stack = [];
    stack.push(root);

    var level = 0;
    while (stack.length != 0) {
        var currentElems = stack.slice();
        var currentElemtVals = [];
        stack = [];
        for (var i = 0; i < currentElems.length; i++) {
            var elem = currentElems[i];
            currentElemtVals.push(elem.val);
            if (elem.left)
                stack.push(elem.left);
            if (elem.right)
                stack.push(elem.right);
        }


        if (level % 2 == 0) {
            result[level] = currentElemtVals;
        } else {
            result[level] = currentElemtVals.reverse();
        }
        level++;
    }
    return result;
};