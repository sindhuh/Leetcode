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
 * @return {TreeNode}
 */


var getSuccessorFromRightTree = function (node) {
    if (node.left === null) {
        return node;
    } else {
        getSuccessorFromRightTree(node.left);
    }
};

var inorderSuccessor = function (root, p) {
    var ancesstor = null;
    while (root !== null && root.val !== p.val) {
        if (root.val > p.val) {
            ancesstor = root;
            root = root.left;
        } else {
            root = root.right;
        }
    }

    if (root == null) {
        return null
    }

    if (root.right === null) {
        return ancesstor
    }

    return getSuccessorFromRightTree(root.right);

};


function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var BinarySearchTree = function () {
    this.root = null;

};


BinarySearchTree.prototype.insert = function (val) {
    var root = this.root;
    if (this.root === null) {
        this.root = new TreeNode(val);
        return;
    }

    var currentNode = root;
    while (currentNode !== null) {
        if (currentNode.val > val) {
            if (currentNode.left) {
                currentNode = currentNode.left;
            } else {
                currentNode.left = new TreeNode(val);
                break;
            }
        } else {
            if (currentNode.right) {
                currentNode = currentNode.right;
            } else {
                currentNode.right = new TreeNode(val);
                break;
            }
        }
    }
};

var createBST = function (nums) {
    var bst = new BinarySearchTree();
    for (var i = 0; i < nums.length; i++) {
        bst.insert(nums[i]);
    }
    inorderTraversal(bst.root);
};


var inorderTraversal = function (root) {
    if (root === null) {
        return;
    }
    inorderTraversal(root.left);
    console.log(root.val);
    inorderTraversal(root.right);

};

console.log(createBST([20, 8, 22, 4, 12, 10, 14]))
