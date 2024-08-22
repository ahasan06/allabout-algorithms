
var TwoSum = function(nums, target) {

    let first = nums[0];
    let con = target - first

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

const nums = [3,2,4]
const target = 6
const foundSearch = searchInsert(nums, target)
console.log(foundSearch);