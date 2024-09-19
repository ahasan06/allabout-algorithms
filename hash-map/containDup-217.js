var containsDuplicate = function(nums) {

    const hashObj = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (hashObj[num]===true) {
            return true
        }
        else {
            hashObj[num] = true
        }
    }

    return false
};

const nums = [1,2,3,1]
console.log(containsDuplicate(nums));
