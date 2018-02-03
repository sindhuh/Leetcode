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
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var sortedArrayToBST = function (nums) {
    var start = 0;
    var end = nums.length - 1;
    return constructTree(nums, start, end);
};

var constructTree = function (nums, start, end) {
    if (start > end) {
        return null;
    }
    var mid = parseInt((start + end) / 2);
    var treeNode = new TreeNode(nums[mid]);
    treeNode.left = constructTree(nums, start, mid - 1);
    treeNode.right = constructTree(nums, mid + 1, end);
    return treeNode;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));