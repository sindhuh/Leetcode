/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    var s_array = [], t_array = [];
    preorder(s, s_array, true);
    preorder(t, t_array, true);
    return s_array.join("").indexOf(t_array.join("")) !== -1;
};

var preorder = function (root, array, flag) {
    if (root === null) {
        if(flag) {
            array.push('#' +'lnull');
        } else {
            array.push('#' +'rnull');
        }

    } else {
        array.push('#'+root.val);
        preorder(root.left, array, true);
        preorder(root.right, array, false);
    }
};
