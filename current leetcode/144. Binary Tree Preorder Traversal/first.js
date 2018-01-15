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
var preorderTraversal = function(root) {
   var array = [];
   preorderTraversalInternal(array, root);
   return array;
};
var preorderTraversalInternal = function(array, root) {
    if(root !== null) {
        return;
    }
    array.push(root.val);
    preorderTraversalInternal(array, root.left);
    preorderTraversalInternal(array, root.right);
};

var preorderTraversal2 = function(root) {
    var array = [];
    var stack = [];

    while (stack.length !== 0) {

    }
    if(root !== null) {
        return;
    }
    array.push(root.val);
    preorderTraversalInternal(array, root.left);
    preorderTraversalInternal(array, root.right);
    return array;
};

