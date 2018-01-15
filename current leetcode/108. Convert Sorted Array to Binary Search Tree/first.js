
var sortedArrayToBST = function (nums) {
    var tree = new BinaryTree();
    var start = 0;
    var end = nums.length - 1;
    var root = tree.convertArrayToBST(nums, start, end);
    console.log(root);
    tree.preOrder(root);
    return root;
};

function BinaryTree() {
    this.convertArrayToBST = function (nums, start, end) {
        if (start > end) {
            return null;
        }
        var mid = Math.floor((start + end ) / 2)
        var node = new TreeNode(nums[mid]);
        node.left = this.convertArrayToBST(nums, start, mid - 1);
        node.right = this.convertArrayToBST(nums, mid + 1, end);
        return node;
    };

    this.preOrder = function (node) {
        if(node === null) {
            return;
        }
        console.log(node.val)
        this.preOrder(node.left);
        this.preOrder(node.right);
    };
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

sortedArrayToBST([0])