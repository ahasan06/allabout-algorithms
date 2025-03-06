
function twoSum(nums, target) {

    const hash = {}

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i]

        if (hash[complement] !== undefined) {
            return [hash[complement],i]
        }

        hash[nums[i]] = i


    }

    return hash

}

const nums = [2, 7, 11, 15], target = 9
const result = twoSum(nums, target)
console.log(result);
