var twoSum = function (nums, target) {
   const hash = {}
   for (let i = 0; i < nums.length; i++) {
    let complement  = target - nums[i]

    if (hash[complement]!==undefined) {
        return [hash[complement], i]; 
    }
    
    hash[nums[i]] = i
}

return []
};

const nums = [2,7,11,15], target = 9
console.log(twoSum(nums,target));
