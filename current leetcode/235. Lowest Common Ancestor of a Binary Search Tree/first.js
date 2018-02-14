/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var node1Array = searchNode(root, p);
    var node2Array = searchNode(root, q);
    var minLength = Math.min(node1Array.length, node2Array.length);
    var lowestAncestor = null;
    for(var i = 0 ; i < minLength; i++) {
        if(node1Array[i].val === node2Array[i].val) {
            lowestAncestor = node1Array[i]
        } else {
            return lowestAncestor;
        }
    }
    console.log(string1, string2)
};

var searchNode = function (root, p) {
    var nodes = [];
    while(root !== null) {
        if(p.val > root.val) {
            nodes.push(root);
            root = root.right
        } else if(p.val < root.val) {
            nodes.push(root);
            root = root.left;
        } else {
            nodes.push(root);
            return nodes;
        }
    }
};
