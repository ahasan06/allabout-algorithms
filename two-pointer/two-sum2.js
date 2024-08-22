var twoSum = function (nums, target) {
    let firstInd = 0;
    let lasInd = nums.length - 1;

    while (firstInd < lasInd) {
        const sum = nums[firstInd] + nums[lasInd];
        if (sum === target) {
            return [firstInd + 1, lasInd + 1];
        } else if (sum > target) {
            lasInd--;

        } else if (sum < target) {
            firstInd++;
        }
    }
    return [];
};

const array = [-1,0];
const target = -1;

console.log(twoSum(array, target)); 
