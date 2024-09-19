
var majorityElement = function(nums) {
    let hashObj = {
    }

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        hashObj[num]!= null ? hashObj[num] += 1 : hashObj[num] = 1
    }
    
    for (const key in hashObj) {
        if (hashObj[key] > Math.floor(nums.length / 2)) {
            return parseInt(key);
        }
    }
};

nums = [3,2,3]
console.log(majorityElement(nums));
