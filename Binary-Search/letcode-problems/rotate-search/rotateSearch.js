var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;;
    
    while (left<=right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[left]<=nums[mid]) {
            if (nums[left]<=target && target<nums[mid]) { // search left half [4,5,6]
                right = mid-1
            }
            else{
                left = mid + 1 // search right hals [0,1,2]
            }
        }
        else{
            if (nums[right]>=target && target>nums[mid]) { // search right half 
                left = mid+1
            }
            else{
                right = mid-1
            }
        }
    }
    return -1
};
const nums = [1,2,3,4,5,6,7,8], target = 7
console.log(search(nums,target));
