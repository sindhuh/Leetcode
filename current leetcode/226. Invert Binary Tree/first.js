var invertTree = function(root) {
    if (root !== null) {
        reverseBinaryTree(root);
    }
    return root;
};

function reverseBinaryTree(root) {
    var temp = root.left;
    root.left = root.right;
    root.right = temp;

    if(root.left !== null) {
        reverseBinaryTree(root.left);
    }

    if(root.right !== null) {
        reverseBinaryTree(root.right);
    }

}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}