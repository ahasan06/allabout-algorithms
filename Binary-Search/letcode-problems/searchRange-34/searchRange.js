var searchRange = function(nums, target) {
    let result = [-1, -1];

   function binarySearch(isFirst) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while(left<=right) {
        const mid  = Math.floor((left+right)/2)
        if (nums[mid]===target) {
            index = mid
            if (isFirst) {
                right = mid -1
            }
            else{
                left = mid+1
            }
        }
        else if (nums[mid]<target) {
            left = mid+1
        }
        else{ 
            right = mid-1
        }
    }
    return index
   }
   
   result[0] = binarySearch(true)
   if (result[0]!==-1) {
    result[1] = binarySearch(false)
   }
   
   return result

};
const nums = [1, 2, 3, 4, 5, 5, 6, 6, 6, 7], target = 6;
console.log(searchRange(nums, target));  // Output: [6, 8]