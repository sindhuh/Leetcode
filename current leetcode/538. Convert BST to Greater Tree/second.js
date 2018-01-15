var convertBST = function(root) {
    var sum = [];
    sum[0] = 0;
    reverseOrderTraverse(root, sum);
    return root;
};

var reverseOrderTraverse = function (root, sum) {
    if(root === null) {
        return;
    }
    reverseOrderTraverse(root.right, sum);
    sum[0] = sum[0] + root.val;
    root.val = sum[0];
    reverseOrderTraverse(root.left, sum);
};