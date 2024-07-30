
var searchInsert = function(nums, target) {
    function foundSearch(target,start,end) {
        const midIndex = parseInt((start + end) / 2);
        if (start>end) {
            return start
        }
        else if (nums[midIndex]===target){
            return midIndex
        }
        else if(nums[midIndex]>target){
            return foundSearch(target,start,midIndex-1)
        }
        return foundSearch(target,midIndex+1,end)
        
    }

    return foundSearch (target,0,nums.length-1)
};

const nums = [1, 3, 5, 9, 12]
const target = 6
const foundSearch = searchInsert(nums, target)
console.log(foundSearch);