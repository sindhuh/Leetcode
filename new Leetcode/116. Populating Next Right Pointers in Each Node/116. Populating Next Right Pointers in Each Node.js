/**
 * Created by sindhuhari on 2/4/18.
 */
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

function TreeLinkNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
}

var connect = function (root) {
    linkTree(root);
};

var linkTree = function (treeNode) {
    if (treeNode === null) {
        return;
    }

    if (treeNode.left !== null) {
        treeNode.left.next = treeNode.right;
    }

    if (treeNode.right !== null) {
        if(treeNode.next !== null) {
            treeNode.right.next = treeNode.next.left;
        }
    }

    linkTree(treeNode.left);
    linkTree(treeNode.right);

};


