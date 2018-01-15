var array = [0, 1, 0, 1, 2, 0, 1, 2, 0, 1];
sortColors(array)
function sortColors(nums) {
    var red = 0;
    var blue = nums.length - 1;
    var i = 0;
    while(i <= blue){
        if(nums[i] === 0){
            swap(nums, i, red);
            i++;
            red++;
        } else if(nums[i] === 2){
            swap(nums, i, blue);
            blue --; 
        } else {
            i++;
        }
    }
    console.log(nums)
};

function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}