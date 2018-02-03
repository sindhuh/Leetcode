/**
 * Created by sindhuhari on 2/2/18.
 */
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
    var treeNode = constructTree(preorder, inorder);
    printInorder(treeNode);
    return treeNode;
};

var constructTree = function (preorder, inorder) {
    if (preorder.length !== inorder.length) {
        return null;
    }

    var treeNode = new TreeNode(preorder[0]);
    if (inorder.length === 1) {
        return treeNode;
    }

    var inorderIndex = searchInorderIndex(treeNode.val, inorder);
    var newPreorder = preorder.splice(1, inorderIndex);
    var newInorder = inorder.splice(0, inorderIndex);
    console.log(preorder,inorderIndex);
    console.log(">> left", preorder,newPreorder , inorder, newInorder);
    treeNode.left = constructTree(preorder.splice(1, inorderIndex), inorder.splice(0, inorderIndex));
    newPreorder = preorder.splice(inorderIndex + 1, preorder.length);
    newInorder = inorder.splice(inorderIndex + 1, inorder.length)
    console.log(">> right", preorder, newPreorder , inorder, newInorder);
    treeNode.right = constructTree(preorder.splice(inorderIndex + 1, preorder.length),
        inorder.splice(inorderIndex + 1, inorder.length));
    return treeNode;
};

var searchInorderIndex = function (value, inorder) {
    for (var i = 0; i < inorder.length; i++) {
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
