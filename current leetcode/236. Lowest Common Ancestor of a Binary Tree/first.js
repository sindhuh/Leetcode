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
    var node1Array = [];
    var node2Array = [];
    searchNode(root, p, node1Array);
    searchNode(root, q, node2Array);
    var node1ArrayLength = node1Array.length;
    var node2ArrayLength = node2Array.length;

    var lowestAncestor = null;
    node1Array = node1Array.reverse();
    node2Array = node2Array.reverse();
    console.log(node1Array, node2Array)
    for(var i = 0 ; i < node1ArrayLength && i < node2ArrayLength; i++) {
        if(node1Array[i] === node2Array[i]) {
            lowestAncestor = node1Array[i];
        } else {
            return lowestAncestor;
        }
    }
    return lowestAncestor;
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