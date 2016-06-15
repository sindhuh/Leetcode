function intersection(nums1, nums2) {
    var intersection = [];
    for(var i = 0; i < nums1.length ; i++) {
        for(var j = 0; j < nums2.length; j++) {
            if(nums1[i] == nums2[j]) {
                intersection.push([nums1[i]])
            } else {
                 j = 0;
                intersection = [];
            }
        }
    }
}