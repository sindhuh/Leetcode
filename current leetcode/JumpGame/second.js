var canJump = function (nums) {
  for(var i =0 ; i < nums.length; i++) {
      if(nums[i] >= nums.length - 1) {
          return true;
      }
  }
};

console.log(canJump([3,2,1,0,4]));