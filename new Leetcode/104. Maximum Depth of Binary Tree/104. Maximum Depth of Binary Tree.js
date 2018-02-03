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
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null){
        return 0
    } else {
        var lheight = maxDepth(root.left);
        var rheight = maxDepth(root.right);
        if(lheight > rheight) {
            return lheight + 1;
        } else {
            return rheight + 1;
        }
    }
};