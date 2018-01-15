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
    var number = [];
    if(root !== null) {
       traverse(root, number)
    }
    return number;
};

var traverse = function (root, number) {
    if(root === null) {
        return;
    }
    traverse(root.left, number);
    number.push(root.val);
    traverse(root.right, number)
};