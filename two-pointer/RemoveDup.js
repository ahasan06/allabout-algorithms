//26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;

    if(nums.length === 0) return nums

    while (j<nums.length) {
        
        if (nums[j]!=nums[i]) {
            i++
            nums[i]=nums[j]
        }
        j++
        
    }

    return i+1
};

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));
