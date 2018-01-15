/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var hashMap = [];
var convertBST = function(root) {
    storeSum(root);
    greaterTree(root);
    console.log(hashMap);
    return root;
};

var greaterTree = function (root) {
    if(root !== null) {
        if(hashMap[root.val]) {
            root.val = root.val + hashMap[root.val];
        }
        greaterTree(root.left);
        greaterTree(root.right);
    }
};

var storeSum = function (root) {
    var sum = 0;
    if(root === null) {
        return 0;
    }
    hashMap[root.val] =  getSum(root, sum, root.val);
    storeSum(root.left);
    storeSum(root.right);
};

var getSum = function (root, sum, target) {
    if(root === null) {
        return 0;
    }
    if(root.val > target) {
        sum = sum + root.val
    }
    getSum(root.left, sum, target);
    getSum(root.right, sum, target);
    return sum;
};
