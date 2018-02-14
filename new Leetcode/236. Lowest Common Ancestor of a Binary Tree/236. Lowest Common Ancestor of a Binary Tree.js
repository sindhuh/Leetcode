/**
 * Created by sindhuhari on 2/13/18.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    var node1Array = [];
    var node2Array = [];
    searchNode(root, p, node1Array);
    searchNode(root, q, node2Array);
    var lowestCmnAncestor = null;
    var min = Math.min(node1Array.length, node2Array.length);
    for (var i = 0; i < min.length; i++) {
        if (node1Array[i] === node2Array[i]) {
            lowestCmnAncestor = node1Array[i]
        } else {
            return lowestCmnAncestor;
        }
    }
};


function searchNode(root, p, nodesArray) {
    if(root === null) {
        return false;
    }
    if(root.val === p.val || searchNode(root.left, p, nodesArray) || searchNode(root.right, p, nodesArray)) {
        nodesArray.push(root.val);
        return true;
    }
    return false;
}