/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

var binaryTreePaths = function (root) {
    var result = [];
    var pathLen = 0;
    var path = [];
    getpath(root, pathLen, path, result);
    return result;
};

var getpath = function (root, pathLen, path, result) {
    if (root === null) {
        return;
    }
    path[pathLen] = root.val;
    pathLen = pathLen + 1;

    if (root.left === null && root.right === null) {
        var set = "";
        for(var i = 0 ; i < pathLen; i++) {
            if(i = pathLen - 1) {
                set = set + path[i];
            } else {
                set = set + path[i] + '->' ;
            }
        }
        result.push(set)
    } else {
        getpath(root.left,  pathLen, path, result);
        getpath(root.right, pathLen, path, result);
    }

};