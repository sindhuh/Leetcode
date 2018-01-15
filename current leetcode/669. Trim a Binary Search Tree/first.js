
var trimBST = function(root, L, R) {
    if(root === null) {
        return;
    }
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    if(root.val < L) {

    }
};




































