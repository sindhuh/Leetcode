var merge = function(nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1
    while(k >= 0) {
        if(j < 0 || (i >= 0 && nums1[i] > nums2[j])) {
            nums1[k] = nums1[i];
            k = k - 1;
            i = i - 1;
        } else {
            nums1[k] = nums2[j];
            k = k - 1;
            j = j - 1;
        }
    }
};