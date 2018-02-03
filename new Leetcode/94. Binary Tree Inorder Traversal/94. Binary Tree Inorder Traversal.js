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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = []; var stack = [];
    var current = root;
    while (current !== null || !(stack.length === 0)) {
        while (current !== null) {
            stack.push(current.val);
            current = current.left;
        }
        current = stack.pop();
        result.push(current);
        current = current.right
    }
    return result;

};