/**
 * Created by sindhuhari on 2/1/18.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var buildTree = function (preorder, inorder) {
    var length = preorder.length;
    var treeNode = constructTree(preorder, inorder, 0, length-1);
    printInorder(treeNode);
    return treeNode;
};

var preorderIndex = 0;
var constructTree = function (preorder, inorder, start, end) {
    if (start > end) {
        return null;
    }
    var treeNode = new TreeNode(preorder[preorderIndex]);
    preorderIndex = preorderIndex + 1;

    if (start === end) {
        return treeNode;
    }
    var inorderIndex = searchInorderIndex(treeNode.val, inorder, start, end);
    treeNode.left = constructTree(preorder, inorder, start, inorderIndex - 1);
    treeNode.right = constructTree(preorder, inorder, inorderIndex + 1, end);
    return treeNode;
};

var searchInorderIndex = function (value, inorder, start, end) {
    for (var i = start; i <= end; i++) {
        if (inorder[i] === value) {
            return i;
        }
    }
    return i
};


var printInorder = function (treeNode) {
    if (treeNode === null) {
        return;
    }
    printInorder(treeNode.left);
    console.log(treeNode.val);
    printInorder(treeNode.right);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
