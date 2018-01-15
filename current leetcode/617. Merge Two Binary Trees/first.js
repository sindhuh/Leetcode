/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var mergeTrees = function(t1, t2) {
    if(t1 === null) {
        return t2;
    }
    if(t2 === null) {
        return t1;
    }
    t1.left = mergeTrees(t1.left, t2.left);
    t2.right = mergeTrees(t1.right, t2.right);
    return t1;

};